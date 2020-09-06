import React, { ChangeEvent, KeyboardEvent } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
// Styles
import { Button, TextField } from '@material-ui/core';
import { loadRecords } from '../../helper/recordloader';
import { changePage, changeTerm } from '../../redux/actions/recordAction';
import { propsType, stateType } from '../../model/component.type';

const SearchComponent = (props: propsType): JSX.Element => {
  const dispatch = useDispatch();
  const { loading, term } = props;
  const firstPage = 1;

  const handleOnSearch = () => {
    dispatch(changePage({ page: firstPage }));
    loadRecords(firstPage, term, dispatch);
  };

  const handleTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTerm({ term: event.target.value }));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loadRecords(firstPage, term, dispatch);
      event.preventDefault();
      return false;
    }
  };

  return (
    <form noValidate autoComplete='off'>
      <TextField
        id='outlined-basic'
        label='search'
        variant='outlined'
        size='small'
        value={term}
        style={{ paddingRight: '15px' }}
        onChange={handleTermChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        disabled={loading}
        size='medium'
        color='primary'
        variant='outlined'
        style={{ top: '2px' }}
        onClick={handleOnSearch}
      >
        Search
      </Button>
    </form>
  );
};

const mapStateToProps = (state: stateType) => ({
  records: state.record.records,
  term: state.record.term,
  loading: state.record.loading,
  error: state.record.error,
  page: state.record.page,
});

export default connect(mapStateToProps)(SearchComponent);
