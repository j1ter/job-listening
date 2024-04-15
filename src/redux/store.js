import { createStore } from 'redux';
import advertisementReducer from './reducers';

const store = createStore(
  advertisementReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
