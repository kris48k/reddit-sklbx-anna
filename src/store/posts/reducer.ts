import { Reducer } from "react";
import {  PostProperty, PostRequestAction,  PostRequestErrorAction, PostRequestSuccessAction, PostsRequestAfterAction, POSTS_REQUEST, POSTS_REQUEST_AFTER, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./actions";

export type PostsState = {
  loading: boolean;
  error: string;
  data: PostProperty
  after: string
}

type PostsActions = PostsRequestAfterAction
| PostRequestSuccessAction
| PostRequestErrorAction
| PostRequestAction;

export const postsReduser: Reducer<PostsState, PostsActions> = (state, action) => {
  switch(action.type) {
    case POSTS_REQUEST :
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_AFTER :
      return {
        ...state,
        after: action.after,
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };

     default:return state;
  }
}
