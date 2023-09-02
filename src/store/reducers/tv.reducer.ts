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
    // const formatData = data.reduce(function (accumulator: any[], current: any[]) {
    //     const length = accumulator.length
    //     if (length === 0) {
    //         accumulator[0] = [current]
    //     } else {
    //         const subArray = accumulator[length-1]
    //         if (subArray.length === 4) {
    //             accumulator[length] = [current]
    //         } else {
    //             subArray.push(current)
    //         }
    //     }
    //     return accumulator
    // }, [])
    // console.log('formatData', formatData)

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