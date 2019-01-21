import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import HelloWorld from './features/HelloWorld/helloworld';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HelloWorld} path='/'/>
    </Switch>
  </BrowserRouter>
);

export default Router;