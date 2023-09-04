import { handleActions } from "redux-actions";
import { ShowTVInfo } from "../../common/types/index.d"
import {
    loadTVData,
    loadDetail,
} from "../actions/tv.actions";



interface InitialStateType {
    data: ShowTVInfo[]
    detail: ShowTVInfo | {}
}

const initialState: InitialStateType = {
    data: [],
    detail: {}
}

// load list data
function handleLoadTVData(state: InitialStateType, action: any) {
    const data = action.payload || []
    return {
        ...state,
        data: data
    }
}

// load detail
function handleLoadDetail(state: InitialStateType, action: any) {
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