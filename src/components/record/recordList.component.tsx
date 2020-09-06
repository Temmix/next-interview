import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import RecordComponent from './record.component';
import { Content } from './record.styles';
import { loadRecords } from '../../helper/recordloader';
import { changePage } from '../../redux/actions/recordAction';
import { propsType, stateType } from '../../model/component.type';

const RecordListComponent = (props: propsType): JSX.Element => {
  const dispatch = useDispatch();

  const { page, term, records } = props;
  if (records.length === 0) return <React.Fragment></React.Fragment>;

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      const newPage = page + 1;
      dispatch(changePage({ page: newPage }));
      loadRecords(newPage, term, dispatch);
    }
  };

  return (
    <Content onScroll={handleScroll}>
      {records.map((record, index) => (
        <React.Fragment key={index}>
          <RecordComponent {...record} />
        </React.Fragment>
      ))}
    </Content>
  );
};

const mapStateToProps = (state: stateType) => ({
  records: state.record.records,
  term: state.record.term,
  page: state.record.page,
  loading: state.record.loading,
  error: state.record.error,
});

export default connect(mapStateToProps)(RecordListComponent);
