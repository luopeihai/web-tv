import { takeEvery, put } from "redux-saga/effects";
import { get } from "../../common/axios";
import {
  fetchTVData,
  loadTVData
} from "../actions/tv.actions";

function* handleFetchTVData() {

  const { data } = yield get(
    "/shows"
  );
  yield put(loadTVData(data));
}


export default function* TVSaga() {
  yield takeEvery(fetchTVData, handleFetchTVData);
}