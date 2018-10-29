import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
];
const data = {
  temperature: 15,
  humidity: 8,
  weatherState: "normal",
  wind: "4.6 m/s",
}

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = {
      forecastData: null,
    }
  }
  renderForecastItemDays = () => {
    return days.map(day => (<ForecastItem key={day} weekDay={day} hour={10} data={data}/>));
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
          this.renderForecastItemDays():
          this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
