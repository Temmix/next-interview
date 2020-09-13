import {
  loadRecordsSuccess,
  loadRecordsFailure,
  loadRecordsInit,
  changeTerm,
  changePage,
} from './recordAction';
import RecordActionTypes from './record.type';
import IRecord from '../../model/IRecord';

describe('Record Actions', () => {
  it('Init on loading records from server', () => {
    const expectedAction = {
      type: RecordActionTypes.LOAD_RECORDS_INIT,
    };
    expect(loadRecordsInit()).toEqual(expectedAction);
  });

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
    };
    expect(loadRecordsFailure()).toEqual(expectedAction);
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
});
