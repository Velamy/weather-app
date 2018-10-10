import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import {
  SUN
} from './../../constants/weathers';
import {api_weather} from './../../constants/api_url';

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
    console.log("constructor");
  }
  componentDidMount(){
    console.log("ComponentDidMount")
    this.handleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState){
    console.log("ComponentDidUpdate")
  }
  handleUpdateClick = () => {
      console.log("Actualizado");
      fetch(api_weather).then(response => { //El response es la variable que guarda las cabeceras por parte del servidor
        return response.json();
      }).then(data => { //data es la variable que ya contiene en Json los datos que necesitamos
        const newWeather = transformWeather(data);
        console.log("Resultado de HandleUpdateClick");
        this.setState({
          data: newWeather
        });
      });
  }
  render(){
    console.log("render");
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
