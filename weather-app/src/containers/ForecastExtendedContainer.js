import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render(){
    console.log(this.props.city);
    return(
    this.props.city ?
      <ForecastExtended city={this.props.city}/>
      : null

    )
  }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}
const mapStateToProps = ({city}) => ({city}); //devolver objeto de las propiedades del estado que nos interesa

export default connect(mapStateToProps,null)(ForecastExtendedContainer);
