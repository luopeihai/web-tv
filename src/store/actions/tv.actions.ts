import { createAction } from "redux-actions";

// fetch TV shows data
export const fetchTVData = createAction("fetchTVData");

// search TV shows data
export const searchTVData = createAction("searchTVData");

// load TV shows
export const loadTVData = createAction("loadTVData");