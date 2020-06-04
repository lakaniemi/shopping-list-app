import { combineReducers } from 'redux';

import shoppingLists from './reducers/shopping-lists';

const rootReducer = combineReducers({
  shoppingLists,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
