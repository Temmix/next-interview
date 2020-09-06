import IRecord from './IRecord';

export type propsType = {
  records: IRecord[];
  term: string;
  loading: boolean;
  error: boolean;
  page: number;
};

export type stateType = {
  record: {
    records: IRecord[];
    term: string;
    loading: boolean;
    error: boolean;
    page: number;
  };
};
