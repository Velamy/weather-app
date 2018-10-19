import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
const listCities = [
  "Buenos Aires,ar",
  "Washington,us",
  "Bogota,col",
  "Ciudad de México,mex",
  "Madrid,es",
  "Lima,pe",
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log("handleSelectionLocation " + city);
  }
  render() {
    return (
      <div className="App">
      <LocationList cities={listCities}
                    onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    );
  }
}

export default App;
