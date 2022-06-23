import { ActionCreator, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReduser, MeState } from "./me/reducer";
import { PostRequestAction,PostRequestErrorAction, PostRequestSuccessAction, PostsRequestAfterAction, POSTS_REQUEST, POSTS_REQUEST_AFTER, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./posts/actions";
import { postsReduser, PostsState } from "./posts/reducer";
import {  TokenRequestErrorAction, TokenRequestSuccessAction, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./token/actions";
import { tokenReduser, TokenState } from "./token/reducer";

export type RootState = {
  commentText: string;
  token:TokenState;
  me: MeState;
  posts: PostsState
}
const initialState: RootState = {
  commentText: 'Привет Skilbox',
  token: {
    token:'',
    error:''
  },
  me: {
    loading: false,
    error: '',
    data: {}
  },
  posts: {
    loading: false,
    error: '',
    data: {},
    after: ''
  }
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdataCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string
}

export const updateComment: ActionCreator<UpdataCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = UpdataCommentAction
  | TokenRequestSuccessAction
  | TokenRequestErrorAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostsRequestAfterAction
  | PostRequestSuccessAction
  | PostRequestErrorAction
  | PostRequestAction;
export const rootReducer: Reducer<RootState , MyAction> = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_COMMENT :
      return {
        ...state,
        commentText: action.text
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReduser(state.me, action)
      }
    case TOKEN_REQUEST_SUCCESS:
      case TOKEN_REQUEST_ERROR:
        return {
          ...state,
          token: tokenReduser(state.token, action)
        }
    case POSTS_REQUEST:
    case POSTS_REQUEST_AFTER:
    case POSTS_REQUEST_ERROR:
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: postsReduser(state.posts, action)
      }
    default:return state;
  }
}
