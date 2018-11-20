import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//import ForecastExtended from './components/ForecastExtended';
import './App.css';

const listCities = [
  "Buenos Aires,ar",
  "Washington,us",
  "Bogota,col",
  "Ciudad de México,mex",
  "Guadalajara,mex",
  "Madrid,es",
  "Lima,pe",
];

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather-App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={listCities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper >
              <div className="details">
                <ForecastExtendedContainer /*city={"Buenos Aires,ar"}*//>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
