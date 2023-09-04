import { handleActions } from "redux-actions";
import { LOCAL_FOLLOW_KEY } from "../../common/constants";
import {
    loadFollowData,
    toggleFollow
} from "../actions/follow.actions";

interface InitialStateType {
    data: string[]
}

const initialState: InitialStateType = {
    data: [],
}


// load follow
function handleLoadFollowData(state: InitialStateType, action: any) {
    let data = []
    try {
        const followString = localStorage.getItem(LOCAL_FOLLOW_KEY);
        if (followString) {
            data = JSON.parse(followString)
        }
    } catch { }

    return {
        ...state,
        data
    }
}

function handleToggleFollow(state: InitialStateType, action: any) {
    const id = action.payload
    let newData: string[] = [...state.data]

    if (newData.includes(id)) {
        newData = state.data.filter((item: string) => item !== id)
    } else {
        newData.push(id)
    }

    try {

        const followString = JSON.stringify(newData)
        localStorage.setItem(LOCAL_FOLLOW_KEY, followString);

    } catch { }

    return {
        ...state,
        data: newData
    }
}

export default handleActions(
    {
        [loadFollowData as any]: handleLoadFollowData,
        [toggleFollow as any]: handleToggleFollow
    },
    initialState
);