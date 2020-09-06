import IRecordList from '../../model/IRecordList';
import RecordActionTypes from './record.type';

export type recordType = {
  type: string;
  payload: {
    record: IRecordList;
    error: boolean;
    loading: boolean;
    page: number;
    term: string;
  };
};

export const loadRecordsSuccess = (payload: any): recordType => ({
  type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
  payload,
});

export const loadRecordsFailure = (payload: any): recordType => ({
  type: RecordActionTypes.LOAD_RECORDS_FAILURE,
  payload,
});

export const changeTerm = (payload: any): recordType => ({
  type: RecordActionTypes.CHANGE_TERM,
  payload,
});

export const changePage = (payload: any): recordType => ({
  type: RecordActionTypes.CHANGE_PAGE,
  payload,
});

export const changeLoading = (payload: any): recordType => ({
  type: RecordActionTypes.LOADING,
  payload,
});

export const changeError = (payload: any): recordType => ({
  type: RecordActionTypes.ERROR,
  payload,
});
