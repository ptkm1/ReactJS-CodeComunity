import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Home from './paginas/home';


export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
