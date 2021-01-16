import types from '../actionsTypes';

export const fetchFoundPets = () =>{
  return{
    type: types.FETCH_FOUND_PETS
  };
};

export const fetchLostPets = () =>{
  return{
    type: types.FETCH_LOST_PETS
  };
};

export const setFoundPetsToStore = data  =>{
  return{
    type: types.SET_FOUND_PETS_TO_STORE,
    payload: data
  };
};

export const setLostPetsToStore = data  =>{
  return{
    type: types.SET_LOST_PETS_TO_STORE,
    payload: data
  };
};

export const setUploadedImg = data  =>{
  return{
    type: types.SET_UPLOADED_IMG,
    payload: data
  };
};
