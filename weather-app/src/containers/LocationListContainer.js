import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationList from './../components/LocationList';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities } from './../reducers';

class LocationListContainer extends Component {
  componentDidMount(){
    this.props.setWeather(this.props.cities);
  }
  handleSelectedLocation = city => {
   this.props.setCity(city);
  }
  render(){
      console.log(this.props.citiesWeather);
    return(

      <LocationList cities={this.props.citiesWeather}
                    onSelectedLocation={this.handleSelectedLocation}/>
    )
  }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: payload => dispatch(setSelectedCity(payload)),
  setWeather: cities => dispatch(setWeather(cities)),
})

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)})

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
