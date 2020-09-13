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

export type recordSimpleType = {
  type: string;
};

export const loadRecordsInit = (): recordSimpleType => ({
  type: RecordActionTypes.LOAD_RECORDS_INIT,
});

export const loadRecordsSuccess = (payload: any): recordType => ({
  type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
  payload,
});

export const loadRecordsFailure = (): recordSimpleType => ({
  type: RecordActionTypes.LOAD_RECORDS_FAILURE,
});

export const changeTerm = (payload: any): recordType => ({
  type: RecordActionTypes.CHANGE_TERM,
  payload,
});

export const changePage = (payload: any): recordType => ({
  type: RecordActionTypes.CHANGE_PAGE,
  payload,
});
