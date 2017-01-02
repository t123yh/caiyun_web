import {
  UPD_DATA,
  UPD_LOC,
  UPD_STATUS,
} from '../mutation-types';

export default {
  state: {
    location: {
      latitude: 0,
      longitude: 0,
    },
    weatherData: {},
    loadStatus: '',
  },
  mutations: {
    [UPD_LOC](state, loc) {
      state.location.latitude = loc.coords.latitude;
      state.location.longitude = loc.coords.longitude;
    },
    [UPD_DATA](state, dat) {
      state.weatherData = dat;
    },
    [UPD_STATUS](state, str) {
      state.loadStatus = str;
    },
  },
};
