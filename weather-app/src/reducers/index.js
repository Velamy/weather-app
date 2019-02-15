import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities
 } from './cities';
import { city } from './city';

export default combineReducers({
  cities,
  city
});
/*Estructura del createSelector:
createSelector( [inputSelector], resultFunction)*/
//Selectores con la libreria Reselector
export const getCity = createSelector(state => state.city, city => city);
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
//export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities,getCity(state)));
