export const getIsErrorWindowOpen = state => state?.uIStateReducer?.isErrorWindowOpen;
export const getNotificationMessage = state => state?.uIStateReducer?.notificationMessage;

export const isAuthenticated = state => state.authReducer?.isAuthenticated;

export const getFoundPets = state => {
  let petsArr = [];
  const pets = state.petsReducer?.foundPets;
  for(let key in pets){
    petsArr.push(pets[key]);
  }
  return petsArr;
};
// export const getSearchResult = createSelector(getFoundPets, getSearchText, (users, text) => {
//     return users?.filter(user => user.FirstName.toLowerCase().includes(text)
//         || user.LastName.toLowerCase().includes(text));
//
// });

export const getErrorObject = state => state?.alertReducer;

