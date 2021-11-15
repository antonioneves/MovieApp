import searchReducer from './search';
import detailsReducer from './details';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  searchResults: searchReducer,
  movieDetails: detailsReducer,
});

export default rootReducer;
