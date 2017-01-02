/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

export const location = state => state.geodata.location;
export const loadStatus = state => state.geodata.loadStatus;
export const weatherData = state => state.geodata.weatherData;
