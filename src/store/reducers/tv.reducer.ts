import { handleActions } from "redux-actions";
import {
    loadTVData,
    loadDetail
} from "../actions/tv.actions";

interface IInitialState {
    data: any[]
    detail: any
}

const initialState: IInitialState = {
    data: [],
    detail: {}
}

// load list data
function handleLoadTVData(state: any, action: any) {
    const data = action.payload || []
    return {
        ...state,
        data: data
    }
}

// load detail
function handleLoadDetail(state: any, action: any) {
    const detail = action.payload || {}
    return {
        ...state,
        detail
    }
}

export default handleActions(
    {
        [loadTVData as any]: handleLoadTVData,
        [loadDetail as any]: handleLoadDetail
    },
    initialState
);