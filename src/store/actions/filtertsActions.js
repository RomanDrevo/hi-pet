import types from '../actionsTypes';

export const setFilterPetType = data => {
  return {
    type: types.SET_FILTER_PET_TYPE,
    payload: data
  };
};

export const setFilterPetColor = data => {
  return {
    type: types.SET_FILTER_PET_COLOR,
    payload: data
  };
};
