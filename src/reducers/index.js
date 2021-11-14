import searchReducer from './search';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  searchResults: searchReducer,
});

export default rootReducer;
