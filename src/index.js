import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {  Route, BrowserRouter as Router, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./redux/reducers";
import PostsIndex from "./redux/containers/posts_index";
import PostsNew from "./redux/containers/posts_new";
import PostsShow from "./redux/containers/posts_show";
import PostNavigation from "./redux/containers/posts_navigation";

import './stylesheets/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router >
      <div>
        <PostNavigation />
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
