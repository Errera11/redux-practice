import {takeEvery} from 'redux-saga/effects';
import {ASYNC_ADD_CASH1, ASYNC_GET_CASH1} from '../../store/cashReducer';
import {ASYNC_ADD_CUSTOMER} from '../../store/customerReducer';

import {decrementFunction, fetchUsers, incrementFunction} from '../workers/worker';

export function* cashWatcher () {
  yield takeEvery(ASYNC_ADD_CASH1, incrementFunction);
  yield takeEvery(ASYNC_GET_CASH1, decrementFunction);
}

export function* customerWatcher() {
  yield takeEvery(ASYNC_ADD_CUSTOMER, fetchUsers);
}
