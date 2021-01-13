import actionsTypes from '../actionsTypes';

export const setCurrentScreen = data => console.log('---data: ', data) || ({
  type: actionsTypes.SET_CURRENT_SCREEN,
  payload: data,
});
