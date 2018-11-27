import transformForecast from './../services/transformForecast';

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const api_key ="a63e26a166319df7ac52ef3ca6a9353a";
const url = "http://api.openweathermap.org/data/2.5/forecast";

const setCity = value => ({type: SET_CITY, value});
const setForecastData = value => ({type: SET_FORECAST_DATA, value});

export const setSelectedCity = value => {
  return dispatch => {
    const url_forecast = `${url}?q=${value}&appid=${api_key}`;
      //Activar en el store un indicador de busqueda de datos
    dispatch(setCity(value));
    return fetch(url_forecast).then(
      data => (data.json())
    ).then( weatherData => {
      const forecastData = transformForecast(weatherData);
      console.log(forecastData);
      //modificar el estado con el resultado de la promise
      dispatch(setForecastData({city: value, forecastData}));
      }
    );
  }
};
