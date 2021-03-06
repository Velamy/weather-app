import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
  const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
  }
  const toListCities = cities => (
    cities.map(city => (
    <WeatherLocation
        city={city.name}
        key={city.key}
        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
        data={city.data}/>))
  );
  return(
  <div className="locationListCont">
    {toListCities(cities)}
  </div>
);
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;
