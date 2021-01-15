import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {fetchFoundPetsSaga, fetchLostPetsSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.FETCH_FOUND_PETS, fetchFoundPetsSaga);
  yield takeEvery(types.FETCH_LOST_PETS, fetchLostPetsSaga);
}
