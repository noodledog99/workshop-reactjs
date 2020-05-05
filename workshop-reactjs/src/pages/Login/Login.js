import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../api/api";
import { setTokenLogin, isLogin } from "../../utils/AuthToken";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let dataLogin = {
      username: username,
      password: password,
    };

    let res = await loginUser(dataLogin);
    console.log(res.status);
    if (res.status === "success") {
      setTokenLogin(res.data._id);
      
      props.history.push("/profile");
    }
  };


  return (
    <div style={{}}>
      <div className="login-area d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="card-body">
            <div className="content-top">
              <h1>Login</h1>
              <p>Enter your credentials to login</p>
            </div>
            <div className="content-center">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your username with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
