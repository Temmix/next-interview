import { takeLatest, call, put } from 'redux-saga/effects';
import RecordActionTypes from '../actions/record.type';
import {
  loadRecordsFailure,
  loadRecordsInit,
  loadRecordsSuccess,
} from '../actions/recordAction';
import ituneApi from '../../apis/itunesApi';

export function* loadRecordsWatcher() {
  yield takeLatest(RecordActionTypes.LOAD_RECORDS_BEGIN, loadRecordsFlow);
}

export function* loadRecordsFlow(action: any) {
  try {
    yield put(loadRecordsInit());
    const records = yield call(ituneApi.getArtistFull, action.payload);
    yield put(loadRecordsSuccess({ records }));
  } catch (error) {
    yield put(loadRecordsFailure());
  }
}
