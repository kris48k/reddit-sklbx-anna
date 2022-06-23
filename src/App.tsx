import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import {Layout} from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { applyMiddleware, createStore} from "redux";
import { Provider, } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useIsMounted } from "./hooks/useIsMounted";
import { Post } from "./shared/Post";
import { NoFound } from "./shared/NoFound";
import {RecoilRoot} from 'recoil';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent(){
  const [isMounted] = useIsMounted();

  useToken();
  return (

      <Layout>
        <Header  />
        {isMounted && (
        <BrowserRouter>
          <Content>
            <Switch>
              <Route exact path={['/', '/auth']}>
                <Redirect to='/posts'/>
              </Route>
              <Route exact path ='/posts'>
                <CardsList  />
              </Route>
              <Route path='/posts/:id'  >
                <CardsList  />
                <Post />
              </Route>
              <Route path="*">
                <NoFound />
              </Route>
            </Switch>
          </Content>
        </BrowserRouter>
        )}
      </Layout>
  )

}

function AppWrapper() {

  return (
    <Provider store={store}>
      <RecoilRoot>
        <AppComponent />
      </RecoilRoot>
    </Provider>
  )
}



export const App = hot(() => <AppWrapper/>);
