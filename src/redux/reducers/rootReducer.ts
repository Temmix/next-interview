import { combineReducers } from 'redux';

import { recordReducer } from './recordReducer';

const rootReducer = combineReducers({
  record: recordReducer,
});

export default rootReducer;
