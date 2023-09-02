import { all } from "redux-saga/effects";
import TVSaga from "./tv.saga";

export default function* rootSaga() {
    yield all([TVSaga()]);
}
