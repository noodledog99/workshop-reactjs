import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import { getUserById, editUserById } from "../../api/api";

export default function EditProfile(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleEditProfile = async (e) => {
    e.preventDefault();
    let dataUpdate = {
      username: username,
      password: password,
      name: name,
      age: age,
      salary: salary,
    };

    await editUserById(props.match.params.id, dataUpdate).then((res) => {
      if (res.status === "success") {
        props.history.push("/profile");
      }
    });
  };

  const fetchUser = async () => {
    await getUserById(props.match.params.id).then((res) => {
      if (res.status === "success") {
        setUsername(res.data.username);
        setPassword(res.data.password);
        setName(res.data.name);
        setAge(res.data.age);
        setSalary(res.data.salary);
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{}}>
      <div className="editp-area pt-4">
        <div className="card" style={{ width: "50rem", margin: "0 auto" }}>
          <div className="card-body">
            <div className="content-top">
              <h1>Edit Profile</h1>
              <p>edit your name, age etc.</p>
            </div>
            <div className="content-center text-left">
              <form onSubmit={handleEditProfile}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    value={username}
                    className="form-control"
                    id="username"
                    placeholder=""
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    id="password"
                    placeholder=""
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    value={name}
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
                    value={age}
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
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="form-control"
                    id="salary"
                    placeholder=""
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
