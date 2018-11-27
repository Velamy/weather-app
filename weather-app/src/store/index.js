import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';
//import { city } from './../reducers/city';
const initialState = {
  city: "Buenos Aires,ar"
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /*Linea necesaria
para que la herramienta de debbuging de Chrome funcione*/

export const store = createStore(reducers, initialState,composeEnhancers(applyMiddleware(thunk)));
