import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { loginUser } from "../../api/api";

import "./Login.css";

import {
  isLogin,
  setTokenLogin,
  setDispleyName,
  getDisplayName,
} from "../../utils/AuthToken";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resStatus, setResStatus] = useState("");
  const [resMsg, setResMsg] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    let dataLogin = {
      username: data.username,
      password: data.password,
    };

    await loginUser(dataLogin).then((res) => {
      setResStatus(res.status);
      setResMsg(res.message);
      if (res.status === "success") {
        setTokenLogin(res.data._id);
        setDispleyName(res.data.name);
        props.setAuth(isLogin());
        props.setDisplayName(getDisplayName());
        props.props.history.push("/profile");
      }
    });
  };

  return (
    <div style={{}}>
      <div className="login-area d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: "29rem" }}>
          <div className="card-body">
            <div className="content-top">
              <h1>Login</h1>
              <p>Enter your credentials to login</p>
            </div>
            <div className="content-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    maxLength="20"
                    ref={register({ required: true })}
                  />
                  {errors.username && errors.username.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i class="fas fa-exclamation-triangle"></i>This is
                      required
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    maxLength="20"
                    ref={register({ required: true })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i class="fas fa-exclamation-triangle"></i>This is
                      required password
                    </p>
                  )}
                </div>
                {resStatus === "error" && <p style={{ color: "red" }}>{resMsg}</p>}
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
