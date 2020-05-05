import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import EditProfile from "./pages/EditProfile/EditProfile";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import PrivateRoute from "./helper/PrivateRoute";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

import "./App.css";

var routers = {
  login: "/login",
  register: "/register",
  profile: "/profile",
  products: "/products",
  editprofile: "/editprofile/:id"
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <Switch>
          <Redirect exact from="/" to={routers.login} />
          <Route exact path={routers.login} component={Login} />
          <Route exact path={routers.register} component={Register} />
          <PrivateRoute exact path={routers.products} component={Products} />
          <PrivateRoute exact path={routers.profile} component={Profile} />
          <PrivateRoute exact path={routers.editprofile} component={EditProfile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
