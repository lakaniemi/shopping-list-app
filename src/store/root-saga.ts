import { all } from 'redux-saga/effects';

import shoppingLists from './sagas/shopping-lists';

export default function* rootSaga() {
  yield all([shoppingLists]);
}
