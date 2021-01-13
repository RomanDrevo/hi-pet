import { combineReducers } from 'redux';
import uIStateReducer from '../reducers/uIStateReducer';
import authReducer from '../reducers/authReducer';
import petsReducer from './petsReducer';
import screensReducer from './screensReducer';
import alertReducer from '../reducers/alertReducer';

export default combineReducers({
  uIStateReducer,
  authReducer,
  petsReducer,
  alertReducer,
  screensReducer
});
