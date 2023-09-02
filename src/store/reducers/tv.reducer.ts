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
    const data = action.payload || []
    return {
        ...state,
        data: data
    }
}

export default handleActions(
    {
        [loadTVData as any]: handleFetchTVData
    },
    initialState
);