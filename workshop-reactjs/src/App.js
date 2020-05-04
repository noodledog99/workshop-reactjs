import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./helper/PrivateRoute";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";

import "./App.css";

var routers = {
  login: "/login",
  register: "/register",
  home: "/home",
  product: "/product",
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <Switch>
          <Redirect exact from="/" to={routers.product} />
          <Route exact path={routers.login} component={Login} />
          <Route exact path={routers.register} component={Register} />
          <Route exact path={routers.product} component={Product} />
          <PrivateRoute exact path={routers.home} component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
