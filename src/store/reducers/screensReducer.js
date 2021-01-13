import actionsTypes from '../actionsTypes';

const initialState = {
  currentScreen: 'Begin',
};

const screensReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.SET_CURRENT_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };
    default:
      return state;
  }
};

export default screensReducer;
