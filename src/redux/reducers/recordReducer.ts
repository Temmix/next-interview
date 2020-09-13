import { recordType } from '../actions/recordAction';
import RecordActionTypes from '../actions/record.type';

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
        records: [...action.payload.records],
      };
    }
    case RecordActionTypes.LOAD_RECORDS_FAILURE: {
      return { ...state, loading: false, error: true, records: [] };
    }
    default:
      return state;
  }
};
