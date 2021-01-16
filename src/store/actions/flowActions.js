import actionsTypes from '../actionsTypes';

export const setCurrentFlow = data => console.log('---data: ', data) || ({
  type: actionsTypes.SET_CURRENT_FLOW,
  payload: data,
});
