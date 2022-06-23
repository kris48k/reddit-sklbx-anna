import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export interface IPostData {
  id: string,
  subreddit_name_prefixed: string,
  title: string,
  author: string,
  created:number,
  sr_detail: ISrDetailProps,
  preview?:IPrewiew,
  url: string,
  ups: number,
}

export interface IPrewiew {
  enabled:boolean;
}

export interface ISrDetailProps {
  icon_img:string,
  display_name_prefixed: string
}

export interface IPostsContextData {
  body?: string;
  data: IPostData
}

export const POSTS_REQUEST_AFTER = 'POSTS_REQUEST_AFTER';
export type PostsRequestAfterAction = {
  type: typeof POSTS_REQUEST_AFTER;
  after: string
}

export const postAfterRequest:ActionCreator<PostsRequestAfterAction> = (after: string) => ({
  type: POSTS_REQUEST_AFTER,
  after
});

export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostRequestAction = {
  type: typeof POSTS_REQUEST;
}

export const postsRequest:ActionCreator<PostRequestAction> = () => ({
  type: POSTS_REQUEST,
});

export type PostProperty = {[key: string] : IPostData};
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data:  PostProperty
}


export const postsRequestSuccess:ActionCreator<PostRequestSuccessAction> = (data: PostProperty) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});


export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export type PostRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string
}

export const postsRequestError:ActionCreator<PostRequestErrorAction> = (error:string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = (after?:string):ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(postsRequest());
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: { Authorization : `bearer ${getState().token.token}`},
        params: {
              limit:10,
              after: after,
              }
      })
      .then((resp) => {
        const postsData: IPostsContextData[] = resp.data.data.children;
        const newObject: PostProperty= {};
        postsData.forEach(post => {
          const newkey = post.data.id;

          newObject[newkey] = post.data;
        })
        const after = resp.data.data.after;
        dispatch(postAfterRequest(after));

        let allPosts = Object.assign({}, getState().posts.data ,newObject)
        dispatch(postsRequestSuccess(allPosts));
      })
      .catch((error) => {
        console.log(error);
        dispatch(postsRequestError(String(error)));
      });
}
