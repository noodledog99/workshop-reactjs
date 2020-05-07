import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Swal from "sweetalert2";

import { registerUser } from "../../api/api";

import "./Register.css";

export default function Register(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    let dataRegister = {
      username: data.username,
      password: data.password,
      name: data.name,
      age: data.age,
      salary: data.salary,
    };
    
    await registerUser(dataRegister).then((res) => {
      if (res.status === "sucecss") {
        Swal.fire({
          icon: "success",
          title: "Registered",
          text: "Register Succesfully!",
          showConfirmButton: false,
          timer: 2500,
        });
        props.history.push("/login");
      }
    });
  };

  return (
    <div className="register-bg">
      <div className="register-area d-flex align-items-center justify-content-center">
        <div
          className="card"
          style={{ width: "32rem", boxShadow: "10px 10px" }}
        >
          <div className="card-body">
            <div className="content-top">
              <h1>Register</h1>
            </div>
            <div className="content-center text-left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="username"
                    placeholder=""
                    ref={register({ required: true, maxLength: 20 })}
                  />
                  {errors.username && errors.username.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required username
                    </p>
                  )}
                  {errors.username && errors.username.type === "maxLength" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      username required max lenght of 20
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    ref={register({ required: true, maxLength: 20 })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required password
                    </p>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      password required max lenght of 20
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder=""
                    maxLength="50"
                    ref={register({ required: true })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required name
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    id="age"
                    placeholder=""
                    ref={register({ required: true })}
                  />
                  {errors.age && errors.age.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required age
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    id="salary"
                    placeholder=""
                    ref={register({ required: true })}
                  />
                  {errors.salary && errors.salary.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required salary
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{borderRadius: "20px"}}>
                  CREATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
