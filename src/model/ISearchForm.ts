import IRecord from './IRecord';

export default interface ISearchForm {
  loading: {
    loading: boolean;
  };
  page: {
    page: number;
  };
  term: {
    term: string;
  };
  error: {
    error: string;
  };
  record: {
    records: IRecord[];
  };
}
