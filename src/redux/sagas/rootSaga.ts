import { fork } from 'redux-saga/effects';
import { loadRecordsWatcher } from './loadRecordsSaga';

export function* rootSaga() {
  yield fork(loadRecordsWatcher);
}
