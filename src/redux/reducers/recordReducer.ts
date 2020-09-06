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
    case RecordActionTypes.ERROR: {
      return { ...state, error: action.payload.error };
    }
    case RecordActionTypes.LOADING: {
      return { ...state, loading: action.payload.loading };
    }
    case RecordActionTypes.CHANGE_PAGE: {
      return { ...state, page: action.payload.page };
    }
    case RecordActionTypes.CHANGE_TERM: {
      return { ...state, term: action.payload.term };
    }
    case RecordActionTypes.LOAD_RECORDS_SUCCESS: {
      return { ...state, records: [...action.payload.record.records] };
    }
    case RecordActionTypes.LOAD_RECORDS_FAILURE: {
      return { ...state, records: [...action.payload.record.records] };
    }
    default:
      return state;
  }
};
