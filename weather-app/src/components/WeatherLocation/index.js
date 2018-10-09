import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
  SUN
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key ="a63e26a166319df7ac52ef3ca6a9353a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 8,
  wind: "10m/s",
}

class WeatherLocation extends Component{
  constructor(){
    super();
    this.state = {
      city: "Buenos Aires",
      data: data,
    }
  }
  getWeatherState = weatherData =>{
    return SUN;
  }
  getData = weatherData => {
    const {temp,humidity} = weatherData.main;
    const {speed} = weatherData.wind;
    //const {weatherState} = this.getWeatherState(weatherData);
    const data = {
      humidity: humidity,
      temperature: temp,
      weatherState: SUN,
      wind: `${speed} m/s`,
    };
    return data;
  }
  handleUpdateClick = () => {
      console.log("Actualizado");
      fetch(api_weather).then(response => {
        console.log(response); //Cabeceras y status del estado del servidor
        return response.json();
      }).then(data => {
        const newWeather = this.getData(data);
        this.setState({
          data: newWeather
        });
      });
  }
  render(){
    const {city, data} = this.state;
    return (
    <div className="weatherLocationCont">
      <Location city={city}/>
      <WeatherData data={data}/>
      <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>
    )
  }
};

export default WeatherLocation;
