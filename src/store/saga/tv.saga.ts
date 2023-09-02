import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  fetchTVData,
  loadTVData
} from "../actions/tv.actions";

function* handleFetchTVData() {

  const { data } = yield axios.get(
    "https://api.tvmaze.com/shows"
  );
  yield put(loadTVData(data));
}


export default function* TVSaga() {
  yield takeEvery(fetchTVData, handleFetchTVData);
}