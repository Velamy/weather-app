import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render(){
    const { city, forecastData } = this.props;
    return(
    city && forecastData ?
      <ForecastExtended city={city} forecastData={forecastData}/>
      : null

    )
  }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
const mapStateToProps = ({city, cities}) => ({city, forecastData: cities[city] ? cities[city].forecastData : null}); //devolver objeto de las propiedades del estado que nos interesa

export default connect(mapStateToProps,null)(ForecastExtendedContainer);
