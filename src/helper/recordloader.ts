import { Dispatch } from 'react';
import { recordType, recordSimpleType } from '../redux/actions/recordAction';
//import { fetchRecords } from '../redux/reducers/recordReducer';
import { loadRecordsBegin } from '../redux/actions/recordAction';

export const loadRecords = (
  page: number,
  term: string,
  dispatch: Dispatch<recordType | recordSimpleType>
) => {
  dispatch(loadRecordsBegin({ page, term }));
};
