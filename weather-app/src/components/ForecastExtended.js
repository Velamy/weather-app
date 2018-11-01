import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key ="a63e26a166319df7ac52ef3ca6a9353a";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = {
      forecastData: null,
    }
  }
  componentDidMount(){
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
    fetch(url_forecast).then(
      data => (data.json())
    ).then( weatherData => {
      console.log(weatherData);
      const forecastData = transformForecast(weatherData);
      console.log(forecastData);
      this.setState({
        forecastData: forecastData,
      })
      }
    );
  }
  renderForecastItemDays = forecastData => {
    return forecastData.map(forecast => (
      <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay}
                    hour={forecast.hour}
                    data={forecast.data}/>)
    );
  }
  renderProgress = () => {
    return "Cargando";
  }
  render(){
    const { city } = this.props;
    const { forecastData } = this.state;
    return(
      <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        {forecastData ?
          this.renderForecastItemDays(forecastData):
          this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
