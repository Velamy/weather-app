import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const api_key ="a63e26a166319df7ac52ef3ca6a9353a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    dispatch(setCity(payload));
    return fetch(url_forecast).then(
      data => (data.json())
    ).then( weatherData => {
      const forecastData = transformForecast(weatherData);
      console.log(forecastData);
      dispatch(setForecastData({city:payload, forecastData}));
      }
    );
  }
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
      dispatch(getWeatherCity(city));
      fetch(api_weather).then(response => { //El response es la variable que guarda las cabeceras por parte del servidor
        return response.json();
      }).then(weather_data => { //data es la variable que ya contiene en Json los datos que necesitamos
        const weather = transformWeather(weather_data);
        console.log(weather);
        dispatch(setWeatherCity({city,weather}));
      });
    });
  }
}
