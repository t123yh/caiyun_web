export default function (day) {
  const trans = {
    HAZE: {
      name: '霾',
      color: 'color-haze',
    },
    PARTLY_CLOUDY_DAY: {
      name: '多云',
      color: 'color-partly-cloudy',
    },
    CLEAR_DAY: {
      name: '晴',
      color: 'color-sunny',
    },
    CLOUDY: {
      name: '阴',
      color: 'color-cloudy',
    },
    RAIN: {
      name: '雨',
      color: 'color-rainy',
    },
    SNOW: {
      name: '雪',
      color: 'color-snow',
    },
    WIND: {
      name: '风',
      color: 'color-windy',
    },
    FOG: {
      name: '雾',
      color: 'color-foggy',
    },
    CLEAR_NIGHT: {
      name: '晴夜',
      color: 'color-night',
    },
    PARTLY_CLOUDY_NIGHT: {
      name: '多云夜',
      color: 'color-night',
    },
  };
  return trans[day] !== undefined ? trans[day] : { name: day, color: 'color-unknown' };
}
