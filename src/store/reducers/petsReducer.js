import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  foundPets: null,
  lostPets: null
};

const petsReducer = createReducer(initialState, {
  [actionsTypes.SET_FOUND_PETS_TO_STORE]: (state = initialState, {payload}) => {
    return {
      ...state,
      foundPets: payload
    };
  },
  [actionsTypes.SET_LOST_PETS_TO_STORE]: (state = initialState, {payload}) => {
    return {
      ...state,
      lostPets: payload
    };
  },
});

export default petsReducer;
