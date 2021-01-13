import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {fetchFoundPetsSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.FETCH_FOUND_PETS, fetchFoundPetsSaga);
}
