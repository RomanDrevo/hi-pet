import {call, put} from 'redux-saga/effects';
import {
  setLoading,
  toggleErrorWindowIsOpen
} from '../actions/uIStateActions';
import {fetchFoundPetsApi, fetchLostPetsApi} from '../../api';
import {setFoundPetsToStore, setLostPetsToStore} from '../actions/petsActions';
import {setAlert} from '../actions/alertActions';

export function* fetchFoundPetsSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(fetchLostPetsApi);

    if (response.status === 200 && response.data) {
      yield put(setFoundPetsToStore(response.data));
    }

    yield put(setLoading(false));

  } catch (error) {
    yield put(setLoading(false));
    yield put(
      setAlert({
        status: 'error',
        title: 'Error',
        message: error.message
      })
    );
    yield put(toggleErrorWindowIsOpen());
  }
}

export function* fetchLostPetsSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(fetchFoundPetsApi);

    if (response.status === 200 && response.data) {
      yield put(setLostPetsToStore(response.data));
    }

    yield put(setLoading(false));

  } catch (error) {
    yield put(setLoading(false));
    yield put(
      setAlert({
        status: 'error',
        title: 'Error',
        message: error.message
      })
    );
    yield put(toggleErrorWindowIsOpen());
  }
}
