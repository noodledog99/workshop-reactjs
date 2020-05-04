import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../../api/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();
    let dataRegister = {
      username: username,
      password: password,
      name: name,
      age: age,
      salary: salary,
    };

    let res = await registerUser(dataRegister);
    console.log(res);
  };

  return (
    <div style={{}}>
      <div className="register-area d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: "28rem" }}>
          <div className="card-body">
            <div className="content-top">
              <h1>Register</h1>
            </div>
            <div className="content-center text-left">
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="username"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="password"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    id="age"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    onChange={(e) => setSalary(e.target.value)}
                    className="form-control"
                    id="salary"
                    placeholder=""
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
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
