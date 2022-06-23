import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { meRequest } from "../me/actions";
import { RootState } from "../reducer";

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type TokenRequestSuccessAction = {
  type: typeof TOKEN_REQUEST_SUCCESS;
  token: string
}

export const tokenRequestSuccess:ActionCreator<TokenRequestSuccessAction> = (token:string) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
});

export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
export type TokenRequestErrorAction = {
  type: typeof TOKEN_REQUEST_ERROR;
  error: string
}

export const tokenRequestError:ActionCreator<TokenRequestErrorAction> = (error:string) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
});

export const saveToken = (code:string):ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {

  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID || '', password: 'XLvBJYykPyq7oY8di-tHlK_LT40qSg'},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  ).then(({data}) => {
    dispatch(tokenRequestSuccess(data.access_token));
  })

  .catch((error) => {
        console.log(error);
        dispatch(tokenRequestError(String(error)));
  });

}
