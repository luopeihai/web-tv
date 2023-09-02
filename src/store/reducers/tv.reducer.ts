import { handleActions } from "redux-actions";
import {
    loadTVData,
} from "../actions/tv.actions";

const initialState: any[] = [];

function handleFetchTVData(state: any, action: any) {
    return {
        ...state,
        ...action.payload
    }
}

export default handleActions(
    {
        [loadTVData as any]: handleFetchTVData
    },
    initialState
);