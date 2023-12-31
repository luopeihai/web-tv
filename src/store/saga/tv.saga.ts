import { takeEvery, put } from "redux-saga/effects";
import { get } from "../../common/axios";
import {
  fetchTVData,
  searchTVData,
  loadTVData,
  loadDetail,
  fetchDetail,
  ActionType
} from "../actions/tv.actions";



function* handleFetchTVData() {

  const { data } = yield get(
    "/shows"
  );
  yield put(loadTVData(data));
}

function* handleSearchTVData(action: ActionType) {

  const { data = [] } = yield get(
    "/search/shows",
    { q: action.payload }
  );

  if (Array.isArray(data)) {
    yield put(loadTVData(data.map((item) => item.show || {})));
  }

}

function* handleFetchDetail(action: ActionType) {
  const { data = {} } = yield get(
    `/shows/${action.payload}`,
    { embed: "cast" }
  );
  yield put(loadDetail(data));
}


export default function* TVSaga() {
  yield takeEvery(fetchTVData, handleFetchTVData);
  yield takeEvery(searchTVData, handleSearchTVData);
  yield takeEvery(fetchDetail, handleFetchDetail);

}