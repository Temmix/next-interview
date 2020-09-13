import { Dispatch } from 'react';
import itunesApi from '../../service/itunesApi';
import { recordType, recordSimpleType } from '../actions/recordAction';
import RecordActionTypes from '../actions/record.type';
import {
  loadRecordsSuccess,
  loadRecordsFailure,
  loadRecordsInit,
} from '../actions/recordAction';

export const initialState = {
  records: [],
  page: 1,
  term: '',
  error: false,
  loading: false,
};

export const recordReducer = (state = initialState, action: recordType) => {
  switch (action.type) {
    case RecordActionTypes.CHANGE_PAGE: {
      return { ...state, page: action.payload.page };
    }
    case RecordActionTypes.CHANGE_TERM: {
      return { ...state, term: action.payload.term };
    }
    case RecordActionTypes.LOAD_RECORDS_INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    case RecordActionTypes.LOAD_RECORDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        records: [...action.payload.record.records],
      };
    }
    case RecordActionTypes.LOAD_RECORDS_FAILURE: {
      return { ...state, loading: false, error: true, records: [] };
    }
    default:
      return state;
  }
};

export const fetchRecords = () => {
  return async (
    pageNumber: number,
    term: string,
    dispatch: Dispatch<recordType | recordSimpleType>
  ) => {
    dispatch(loadRecordsInit());
    try {
      const newRecords = await itunesApi.getArtist({
        page: pageNumber.toString(),
        term,
      });
      // Api does not have pageNumber, only the pageSize
      dispatch(
        loadRecordsSuccess({
          record: { records: newRecords.data.results },
        })
      );
    } catch (error) {
      dispatch(loadRecordsFailure());
      // use custom error logger
      console.log(error);
    }
  };
};
