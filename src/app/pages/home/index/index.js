/**
 * Created by t123yh on 2016/11/6.
 */

import {
  mapGetters
} from 'vuex';
import dateFormat from 'dateformat';
import TempChart from 'components/linechart.js';
import detectDevice from 'utils/deviceDetector.js';
import toWeather from 'utils/weatherStrings.js';

export default {
  components: {
    VLayout: require('layouts/default/default.vue'),
    TemperatureChart: TempChart
  },
  computed: Object.assign({},
    mapGetters({
      weatherData: 'weatherData',
      location: 'location',
    }), {
      graphHeight() {
        var heights = {
          xs: 400,
          sm: 200,
          md: 200,
          lg: 200
        };
        return heights[detectDevice()];
      },

      // Realtime
      temperature() {
        return this.weatherData.realtime.temperature + ' °C';
      },
      humidity() {
        return Math.floor(this.weatherData.realtime.humidity * 100) + ' %';
      },
      cloudRate() {
        return Math.floor(this.weatherData.realtime.cloudrate * 100) + ' %';
      },
      AQI() {
        return this.weatherData.realtime.aqi;
      },
      weatherDescription() {
        return this.weatherData.hourly.description;
      },
      precipitationStatus() {
        return this.weatherData.minutely.description;
      },

      dates() {
        return this.weatherData.daily.skycon.map(function (item) {
          return dateFormat(new Date(item.date), "mm-dd");
        });
      },

      temperatureData() {
        return {
          labels: this.dates,
          datasets: [{
            label: "Low",
            pointRadius: 0,
            borderColor: '#FFFFFF',
            backgroundColor: '#FFFFFF',
            cubicInterpolationMode: 'monotone',
            data: this.weatherData.daily.temperature.map(function (item) {
              return item.min;
            }),
          }, {
            label: "Average",
            borderColor: '#0097A7',
            backgroundColor: '#0097A7',
            fill: false,
            cubicInterpolationMode: 'monotone',
            data: this.weatherData.daily.temperature.map(function (item) {
              return item.avg;
            }),
          }, {
            label: "High",
            pointRadius: 0,
            borderColor: '#FFFFFF',
            backgroundColor: '#DCEDC8',
            cubicInterpolationMode: 'monotone',
            data: this.weatherData.daily.temperature.map(function (item) {
              return item.max;
            }),
          }, ]
        };
      },

      forecastData() {
        return Array.from(this.generateForecastData());
      }
    },
  ),
  data() {
    return {
      loading: true,
      loadStatus: '',
    };
  },
  methods: {
    generateForecastData: function* () {
      const dates = this.dates;
      for (let i = 0; i < dates.length; i += 1) {
        yield { date: dates[i], weather: toWeather(this.weatherData.daily.skycon[i].value), temperature: this.weatherData.daily.temperature[i].avg + ' °C' };
      }
    }
  },
  mounted: function () {
    new Promise(async(resolve) => {
      this.loading = true;
      this.loadStatus = '正在定位...';
      await this.$store.dispatch('updateLocation');
      this.loadStatus = `定位成功，正在请求数据...（${this.location.latitude}, ${this.location.longitude}）`;
      // alert('loc updated');
      await this.$store.dispatch('updateData');
      this.loadStatus = 'OK';
      // alert('OK');
      this.loading = false;
    });
  }
};
