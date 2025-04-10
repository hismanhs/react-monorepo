import { combineReducers } from 'redux';

import postsReducer from './analitic';

const rootReducer: any = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
