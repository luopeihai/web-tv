import { combineReducers } from "redux";
import TVReducer from "./tv.reducer";
import FollowReducer from "./follow.reducer";
import { ShowTVInfo } from "../../common/types";
export interface StateInfo {
    tv: ShowTVInfo
    follow: string[]
}

export default combineReducers({
    tv: TVReducer,
    follow: FollowReducer
});