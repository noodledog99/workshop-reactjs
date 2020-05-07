import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";

import ManageProduct from "./pages/MangeProduct/ManageProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import EditProfile from "./pages/EditProfile/EditProfile";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import PrivateRoute from "./helper/PrivateRoute";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

import "./App.css";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import { isLogin, getDisplayName } from "./utils/AuthToken";

var routers = {
  login: "/login",
  register: "/register",
  profile: "/profile",
  products: "/products",
  manageproduct: "/manage-product",
  editprofile: "/edit-profile/:id",
  editproduct: "/edit-product/:id",
  viewproduct: "/view-product/:id",
};

function App() {
  const [auth, setAuth] = useState(isLogin());
  const [displayname, setDisplayName] = useState(getDisplayName());
  return (
    <div className="App">
      <Header auth={auth} displayname={displayname} setAuth={setAuth} />
      <div
        className="container-fluid"
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        <Switch>
          <Redirect exact from="/" to={routers.login} />
          <Route
            exact
            path={routers.login}
            component={(props) => (
              <Login
                props={props}
                setAuth={setAuth}
                setDisplayName={setDisplayName}
              />
            )}
          />
          <Route exact path={routers.register} component={Register} />
          <PrivateRoute exact path={routers.products} component={Products} />
          <PrivateRoute exact path={routers.profile} component={Profile} />
          <PrivateRoute
            exact
            path={routers.manageproduct}
            component={ManageProduct}
          />
          <PrivateRoute
            exact
            path={routers.editprofile}
            component={EditProfile}
          />
          <PrivateRoute
            exact
            path={routers.editproduct}
            component={EditProduct}
          />
          <PrivateRoute
            exact
            path={routers.viewproduct}
            component={ViewProduct}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
