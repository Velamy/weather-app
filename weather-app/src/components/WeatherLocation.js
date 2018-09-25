import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
const WeatherLocation = () => {
  return (<div>
  <div> <h1>Weather Location </h1></div>
  <Location/>
  <WeatherData/>
  </div>)
};

export default WeatherLocation;
