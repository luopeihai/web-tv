import { handleActions } from "redux-actions";
import {
    loadTVData,
} from "../actions/tv.actions";

interface IInitialState {
    data: any[]
}

const initialState: IInitialState = {
    data: []
}

function handleFetchTVData(state: any, action: any) {
    return {
        ...state,
        data: action.payload
    }
}

export default handleActions(
    {
        [loadTVData as any]: handleFetchTVData
    },
    initialState
);