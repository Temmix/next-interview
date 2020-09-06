import {
  loadRecordsSuccess,
  loadRecordsFailure,
  changeTerm,
  changePage,
  changeLoading,
  changeError,
} from './recordAction';
import RecordActionTypes from './record.type';
import IRecord from '../../model/IRecord';

describe('Record Actions', () => {
  it('Success on loading records from server', () => {
    const record = {
      artistId: 5,
      artistName: 'Missy Elliot',
      artistViewUrl: 'www.singles.com/7878738',
      country: 'USA',
      isStreamable: true,
      trackName: 'Get the freak on',
      trackNumber: 56,
      trackPrice: 89,
    } as IRecord;

    const params = { records: [{ ...record }, { ...record }, { ...record }] };

    const expectedAction = {
      type: RecordActionTypes.LOAD_RECORDS_SUCCESS,
      payload: {
        records: [...params.records],
      },
    };
    expect(loadRecordsSuccess(params)).toEqual(expectedAction);
  });

  it('Failure on loading records from server', () => {
    const params = { records: [] };

    const expectedAction = {
      type: RecordActionTypes.LOAD_RECORDS_FAILURE,
      payload: {
        records: [...params.records],
      },
    };
    expect(loadRecordsFailure(params)).toEqual(expectedAction);
  });

  it('On change term ', () => {
    const params = { term: 'Rick Ross' };

    const expectedAction = {
      type: RecordActionTypes.CHANGE_TERM,
      payload: { ...params },
    };
    expect(changeTerm(params)).toEqual(expectedAction);
  });

  it('On change page to 10', () => {
    const params = { page: 10 };

    const expectedAction = {
      type: RecordActionTypes.CHANGE_PAGE,
      payload: { ...params },
    };
    expect(changePage(params)).toEqual(expectedAction);
  });

  it('On change page to default', () => {
    const params = { page: 1 };

    const expectedAction = {
      type: RecordActionTypes.CHANGE_PAGE,
      payload: { ...params },
    };
    expect(changePage(params)).toEqual(expectedAction);
  });

  it('On change loading to true ', () => {
    const params = { loading: true };

    const expectedAction = {
      type: RecordActionTypes.LOADING,
      payload: { ...params },
    };
    expect(changeLoading(params)).toEqual(expectedAction);
  });

  it('On change loading to default ', () => {
    const params = { loading: false };

    const expectedAction = {
      type: RecordActionTypes.LOADING,
      payload: { ...params },
    };
    expect(changeLoading(params)).toEqual(expectedAction);
  });

  it('On change error to true ', () => {
    const params = { error: true };

    const expectedAction = {
      type: RecordActionTypes.ERROR,
      payload: { ...params },
    };
    expect(changeError(params)).toEqual(expectedAction);
  });

  it('On change error to default ', () => {
    const params = { error: false };

    const expectedAction = {
      type: RecordActionTypes.ERROR,
      payload: { ...params },
    };
    expect(changeError(params)).toEqual(expectedAction);
  });
});
