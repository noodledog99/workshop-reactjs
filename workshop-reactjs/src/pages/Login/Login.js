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
    <div className="login-bg">
      <div
        className="login-area  d-flex flex-wrap-reverse justify-content-center align-items-center"
        style={{ padding: "60px 0" }}
      >
        <div
          className="login-item"
          style={{
            padding: "89px",
            backgroundColor: "#f9f9f9",
            maxWidth: "480px",
            width: "100%",
            height: "468px",
          }}
        >
          <h1>Welcom </h1>
          <p>Login to the Dashboard</p>
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
                  <i className="fas fa-exclamation-triangle"></i>This is
                  required username
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
                  <i className="fas fa-exclamation-triangle"></i>This is
                  required password
                </p>
              )}
            </div>
            {resStatus === "error" && <p style={{ color: "red" }}>{resMsg}</p>}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ borderRadius: "20px" }}
            >
              Login
            </button>
          </form>
        </div>
        <div className="login-item">
          <img src={process.env.PUBLIC_URL + "asset/images/3411109.jpg"}></img>
        </div>
      </div>
    </div>
  );
}
