import { recordReducer, initialState } from './recordReducer';
import RecordActionTypes from '../actions/record.type';
import { recordType } from '../actions/recordAction';
import IRecord from '../../model/IRecord';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const emptyPayload: recordType = {
      type: '',
      payload: {
        record: { records: [] },
        error: false,
        loading: false,
        page: 1,
        term: '',
      },
    };
    expect(recordReducer(undefined, emptyPayload)).toEqual(initialState);
  });

  it('should handle start ERROR', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.ERROR,
        payload: {
          record: { records: [] },
          error: true,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState, error: true });
  });

  it('should handle default ERROR', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.ERROR,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });

  it('should handle start LOADING', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOADING,
        payload: {
          record: { records: [] },
          error: false,
          loading: true,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it('should handle default LOADING', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOADING,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });

  it('should handle start CHANGE_PAGE', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.CHANGE_PAGE,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 5,
          term: '',
        },
      })
    ).toEqual({ ...initialState, page: 5 });
  });

  it('should handle default CHANGE_PAGE', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.CHANGE_PAGE,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });

  it('should handle start CHANGE_TERM', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.CHANGE_TERM,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: 'Rick Ross',
        },
      })
    ).toEqual({ ...initialState, term: 'Rick Ross' });
  });

  it('should handle default CHANGE_TERM', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.CHANGE_TERM,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });

  it('should handle start LOAD_RECORDS_SUCCESS', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
        payload: {
          record: { records: [{} as IRecord] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState, records: [...[{} as IRecord]] });
  });

  it('should handle default LOAD_RECORDS_SUCCESS', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });

  it('should handle start LOAD_RECORDS_FAILURE', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState, records: [] });
  });

  it('should handle default LOAD_RECORDS_FAILURE', () => {
    expect(
      recordReducer(undefined, {
        type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
        payload: {
          record: { records: [] },
          error: false,
          loading: false,
          page: 1,
          term: '',
        },
      })
    ).toEqual({ ...initialState });
  });
});
