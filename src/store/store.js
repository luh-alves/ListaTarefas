import {createStore} from 'redux';
import {taks} from '../reducers/turnOnOrOff';

export let store = createStore (turnOnOrOff);