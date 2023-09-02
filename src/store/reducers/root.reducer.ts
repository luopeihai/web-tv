import { combineReducers } from "redux";
import TVReducer from "./tv.reducer";

export default combineReducers({
    tv: TVReducer
});