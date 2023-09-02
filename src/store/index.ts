import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/root.saga";
import rootReducers from "./reducers/root.reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);