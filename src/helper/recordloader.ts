import itunesApi from '../service/itunesApi';
import { recordType } from '../redux/actions/recordAction';
import {
  loadRecordsSuccess,
  loadRecordsFailure,
  changeError,
  changeLoading,
} from '../redux/actions/recordAction';
import { Dispatch } from 'react';

export const loadRecords = async (
  pageNumber: number,
  term: string,
  dispatch: Dispatch<recordType>
) => {
  dispatch(changeLoading({ loading: true }));
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
    dispatch(changeError({ error: false }));
  } catch (error) {
    dispatch(
      loadRecordsFailure({
        record: { records: [] },
      })
    );
    dispatch(changeError({ error: true }));
    console.log(error);
  } finally {
    dispatch(changeLoading({ loading: false }));
  }
};
