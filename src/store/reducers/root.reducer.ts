import { combineReducers } from "redux";
import TVReducer from "./tv.reducer";
import { ShowTVInfo } from "../../common/types";
export interface StateInfo {
    tv: ShowTVInfo
}

export default combineReducers({
    tv: TVReducer
});