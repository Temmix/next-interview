import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import RecordListComponent from './components/record/recordList.component';
import SearchFormComponent from './components/search/search.component';
import { Container, LoaderWrapper } from './App.styles';
import { propsType, stateType } from './model/component.type';

const App = (props: propsType) => {
  const { loading, error } = props;

  return (
    <>
      <Container>
        <h2> Next Interview App</h2>
        {error && <p>Please try again later something went wrong</p>}
        <SearchFormComponent />
      </Container>

      <Container>
        <LoaderWrapper>
          {loading && <CircularProgress color='primary' size='5rem' />}
        </LoaderWrapper>

        <RecordListComponent />
      </Container>
    </>
  );
};

const mapStateToProps = (state: stateType) => ({
  records: state.record.records,
  term: state.record.term,
  loading: state.record.loading,
  error: state.record.error,
  page: state.record.page,
});

export default connect(mapStateToProps)(App);
