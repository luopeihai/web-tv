import { takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchTVData
} from "../actions/tv.actions";

function* handleFetchTVData() {

  const { data } = yield axios.get(
    "https://api.tvmaze.com/shows"
  );
  console.log(data)

}


export default function* TVSaga() {
  yield takeEvery(fetchTVData, handleFetchTVData);
}