import { createSelector } from 'reselect';

export const getIsLoading = state => state.uIStateReducer?.isLoading;
export const getIsErrorWindowOpen = state => state?.uIStateReducer?.isErrorWindowOpen;
export const getNotificationMessage = state => state?.uIStateReducer?.notificationMessage;
export const isAuthenticated = state => state.authReducer?.isAuthenticated;
export const getCurrentFlow = state => state.flowReducer?.flow;
export const getListOfUploadedImgs = state => state.petsReducer?.uploadedImgList;


export const getFoundPets = state => {
  let petsArr = [];
  const pets = state.petsReducer?.foundPets;
  for(let key in pets){
    petsArr.push(pets[key]);
  }
  return petsArr;
};

export const getLostPets = state => {
  let petsArr = [];
  const pets = state.petsReducer?.lostPets;
  for(let key in pets){
    petsArr.push(pets[key]);
  }
  return petsArr;
};

// filters
const getFilterPetType = state => state.filtersReducer?.petType;
const getFilterPetColor = state => state.filtersReducer?.color;

const getAppliedFilters = createSelector(
  getFilterPetType,
  getFilterPetColor,
  (
    petType,
    color,

  ) => {
    const filters = {
      ...(petType.length && {
        petType: item => petType.some(filter => item.pet === filter)
      }),
      ...(color.length && {
        color: item => color.some(filter => item.color === filter)
      }),
    };

    return filters;
  }
);

export const filteredLostPets = createSelector(
  getLostPets,
  getAppliedFilters,
  (data, appliedFilters) => {
    const filtersArray = Object.keys(appliedFilters).map(key => {
      return appliedFilters[key];
    });

    return data.filter(item => {
      return filtersArray.every(filter => filter(item));
    });

  }
);

export const getErrorObject = state => state?.alertReducer;

