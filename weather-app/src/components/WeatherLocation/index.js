import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={city}/>
      {data ? <WeatherData data={data}/> :
              <CircularProgress size={50}/>}
    </div>
)
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

/*  handleUpdateClick = () => {
      console.log("Actualizado");
      const api_weather = getUrlWeatherByCity(this.state.city);
      fetch(api_weather).then(response => { //El response es la variable que guarda las cabeceras por parte del servidor
        return response.json();
      }).then(data => { //data es la variable que ya contiene en Json los datos que necesitamos
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      });
  }*/


export default WeatherLocation;
