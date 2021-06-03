import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Followers from './components/Followers';
import Followings from './components/Followings';

ReactDOM.render(
  <Router>

  <Route exact path="/">

  <Main/>
  </Route>


  <Route path="/followers/:username">

      <Followers/>
  </Route>

  <Route path="/following/:username">

<Followings/>
</Route>

  </Router>,
  document.getElementById('root')
);

