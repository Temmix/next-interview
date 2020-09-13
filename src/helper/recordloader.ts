import { recordType, recordSimpleType } from '../redux/actions/recordAction';
import { fetchRecords } from '../redux/reducers/recordReducer';
import { Dispatch } from 'react';

export const loadRecords = (
  pageNumber: number,
  term: string,
  dispatch: Dispatch<recordType | recordSimpleType>
) => {
  fetchRecords()(pageNumber, term, dispatch);
};
