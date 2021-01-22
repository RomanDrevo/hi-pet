import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';

const initialState = {
  petType: [],
  color: []
};

const filtersReducer = createReducer(initialState, {
  [actionsTypes.SET_FILTER_PET_TYPE]: (state, { payload }) => {
    return {
      ...state,
      petType: payload
    };
  },
  [actionsTypes.SET_FILTER_PET_COLOR]: (state, { payload }) => {
    return {
      ...state,
      color: payload
    };
  },
});

export default filtersReducer;
