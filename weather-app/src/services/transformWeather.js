import convert from 'convert-units';
import {
  SUN
} from './../constants/weathers';

const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(0));
}
/*const getWeatherState = weatherData =>{
  return SUN;
}*/
const transformWeather = weatherData => {
  const {temp,humidity} = weatherData.main;
  const {speed} = weatherData.wind;
  //const {weatherState} = this.getWeatherState(weatherData);}
  const temperature = getTemp(temp);
  const data = {
    humidity: humidity,
    temperature: temperature,
    weatherState: SUN,
    wind: `${speed} m/s`,
  };
  return data;
}

export default transformWeather;
