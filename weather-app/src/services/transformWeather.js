import convert from 'convert-units';
import {
  SUN,
  CLOUD,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../constants/weathers';

const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(0));
}
const getWeatherState = weather => {
  const {id} = weather;
  if(id < 300){
    return THUNDER;
  }else if(id < 400 && id > 300){
    return DRIZZLE;
  }else if(id < 600 && id > 400){
    return RAIN;
  }else if(id < 700 && id > 600){
    return SNOW;
  }else if(id === 800){
    return SUN;
  }else{
    return CLOUD;
  }
}
const transformWeather = weatherData => {
  const {temp,humidity} = weatherData.main;
  const {speed} = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  const temperature = getTemp(temp);
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };
  return data;
}

export default transformWeather;
