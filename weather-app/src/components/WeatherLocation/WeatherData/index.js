import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
  SUN
} from './../../../constants/weathers';

const WeatherData = () => (
  <div>
  <WeatherTemperature temperature={25} weatherState={SUN}/>
  <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
  </div>
);

export default WeatherData;
