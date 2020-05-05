import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { isLogout } from "../utils/AuthToken";

export default function Header() {
  const [navigate, setNavigate] = useState("");

  const goToEditProfile = () => {
    setNavigate("edit-profile");
  };

  const goToLogout = () => {
    isLogout()
    setNavigate("logout");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                className="nav-link"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                className="nav-link"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                UserName
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ left: " -77px" }}
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
        <Redirect to={`/editprofile/5eb106944b35ac0011bb3582`} push={true} />
      )}
      {navigate === "logout" && <Redirect to="/" push={true} />}
    </div>
  );
}
