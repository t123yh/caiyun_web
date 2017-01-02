/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types';
import Vue from 'vue';

// Account
export const getAccount = ({
  commit
}, account) => {
  commit(types.GET_ACCOUNT, account);
};

// Auth
export const login = ({
  commit
}, token) => {
  commit(types.LOGIN, token);
};

export const logout = ({
  commit
}) => {
  commit(types.LOGOUT);
};

export const checkAuthentication = ({
  commit
}) => {
  commit(types.CHECK_AUTHENTICATION);
};

export const updateLocation = (store) => new Promise((resolve, reject) => {
  function success(position) {
    store.commit(types.UPD_LOC, position);
    resolve();
    // store.dispatch('updateData', position.coords);
  }

  function error(err) {
    // alert(`更新位置时失败：${err.message}`);
    // store.commit(types.UPD_STATUS, `定位失败：${err}`);
    reject(err);
  }

  // store.commit(types.UPD_STATUS, '正在定位...');
  navigator.geolocation.getCurrentPosition(success, error);
});

export const updateData = (store) => new Promise((resolve, reject) => {
  Vue.http.jsonp(`https://api.caiyunapp.com/v2/Y2FpeXVuIGFuZHJpb2QgYXBp/${store.state.geodata.location.longitude},${store.state.geodata.location.latitude}/weather?lang=zh_CN&span=6&begin=${Math.floor(Date.now() / 1000)}&hourlysteps=24&alert=true&version=3.0.1`)
    .then((response) => {
      // store.commit(types.UPD_STATUS, '数据更新成功');
      store.commit(types.UPD_DATA, response.body.result);
      resolve();
    }, (response) => {
      // store.commit(types.UPD_STATUS, '数据更新失败');
      reject(response);
    });
});
