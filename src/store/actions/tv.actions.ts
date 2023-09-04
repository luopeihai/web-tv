import { createAction } from "redux-actions";

// fetch TV shows data
export const fetchTVData = createAction("fetchTVData");

// search TV shows data
export const searchTVData = createAction("searchTVData");

// load TV shows
export const loadTVData = createAction("loadTVData");

// search TV show detail
export const fetchDetail = createAction("fetchDetail");

// load TV show detail
export const loadDetail = createAction("loadDetail");


export interface ActionType {
    payload: string
}