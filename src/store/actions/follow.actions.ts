import { createAction } from "redux-actions";

export const loadFollowData = createAction("loadFollowData");

// follow/unfollow ts show
export const toggleFollow = createAction("toggleFollow");