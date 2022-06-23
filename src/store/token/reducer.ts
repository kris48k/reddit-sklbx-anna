import { Reducer } from "react";
import { TokenRequestErrorAction, TokenRequestSuccessAction, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./actions";

export type TokenState = {
  error: string;
  token: string
}

type TokenActions = TokenRequestSuccessAction| TokenRequestErrorAction;

export const tokenReduser: Reducer<TokenState, TokenActions> = (state, action) => {
  switch(action.type) {
     case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
      };

    default:return state;
  }
}
