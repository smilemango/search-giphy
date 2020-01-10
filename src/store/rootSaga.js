import {fork, all} from 'redux-saga/effects';
import SearchSaga from '../components/search/redux/SearchSaga';

function *RootSaga() {
  yield all([
    fork(SearchSaga),
    //fork(AnotherSaga)
  ]);
}

export default RootSaga;
