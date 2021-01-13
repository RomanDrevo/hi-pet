import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
  currentScreen: '',
};

const screensReducer = createReducer(initialState, {
  [actionsTypes.SET_CURRENT_SCREEN]: (state, {payload}) => {
    return {
      ...state,
      currentScreen: payload
    };
  },
  // [actionsTypes.OPEN_NOTIFICATION]: (state, {payload}) => {
  //   return {
  //     ...state,
  //     isNotificationOpen: true,
  //     notificationMessage: payload
  //   };
  // },
  // [actionsTypes.CLOSE_NOTIFICATION]: (state) => {
  //   return {
  //     ...state,
  //     isNotificationOpen: false,
  //     notificationMessage: ''
  //   };
  // },
  // [actionsTypes.TOGGLE_ERROR_WINDOW_IS_OPEN]: state => {
  //   return {
  //     ...state,
  //     isErrorWindowOpen: !state.isErrorWindowOpen
  //   };
  // },
});

export default screensReducer;
