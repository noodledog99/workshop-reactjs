import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { isLogout, isLogin } from "../../utils/AuthToken";
import "./Header.css";

export default function Header(props) {
  const [navigate, setNavigate] = useState("");

  const goToEditProfile = () => {
    setNavigate("edit-profile");
  };

  const goToLogout = () => {
    isLogout();
    props.setAuth(isLogin());
    setNavigate("logout");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          MiniWorkShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className={props.auth ? "d-none d-print-block" : "nav-item"}>
              <NavLink
                exact
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
            <li className={props.auth ? "d-none d-print-block" : "nav-item"}>
              <NavLink
                exact
                to="/register"
                className="nav-link"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
            <li className={props.auth ? "nav-item" : "d-none d-print-block"}>
              <NavLink
                exact
                to="/products"
                className="nav-link"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
            <li className={props.auth ? "nav-item" : "d-none d-print-block"}>
              <NavLink
                exact
                to="/manage-product"
                className="nav-link"
                activeClassName="active"
              >
                Manage
              </NavLink>
            </li>
            <li className={props.auth ? "nav-item" : "d-none d-print-block"}>
              <NavLink
                exact
                to="/profile"
                className="nav-link"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
            <li
              className={
                props.auth ? "nav-item dropdown" : "d-none d-print-block"
              }
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.displayname}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ left: " -60px" }}
              >
                <a
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={goToEditProfile}
                >
                  Edit Profile
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={goToLogout}
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {navigate === "edit-profile" && (
        <Redirect
          to={`/edit-profile/${localStorage.getItem("user_id")}`}
          push={true}
        />
      )}
      {navigate === "logout" && <Redirect to="/" push={true} />}
    </div>
  );
}
