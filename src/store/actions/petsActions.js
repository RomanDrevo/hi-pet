import types from '../actionsTypes';

export const fetchFoundPets = () =>{
  return{
    type: types.FETCH_FOUND_PETS
  };
};

export const setFoundPetsToStore = data  =>{
  return{
    type: types.SET_FOUND_PETS_TO_STORE,
    payload: data
  };
};
