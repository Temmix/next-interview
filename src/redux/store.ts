import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(...[]));
export default store;
