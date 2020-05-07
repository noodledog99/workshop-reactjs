import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

import { getUserById } from "../../api/api";

export default function Profile() {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await getUserById(localStorage.getItem("user_id")).then((res) => {
      if (res.status === "success") {
        setUserProfile(res.data);
      }
    });
  };

  return (
    <div className="profile-bg">
      <div className="profile-area d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="title-head">Profile Detail</h1>
          {
            <div>
              <div className="row pt-2">
                <div className="col-12 d-flex justify-content-center">
                  <h2>{userProfile.name}</h2>
                  <div className="btn-edit">
                    <Link
                      style={{
                        fontWeight: "900",
                        borderRadius: "0",
                      }}
                      to={`/edit-profile/${localStorage.getItem("user_id")}`}
                      className="btn btn-outline-light border"
                    >
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>
                      <i class="fas fa-user"></i> Age
                    </strong>{" "}
                    <span className="pr-3">{userProfile.age}</span>
                    <strong>
                      <i class="fas fa-dollar-sign"></i> Salary
                    </strong>{" "}
                    <span>{userProfile.salary}</span>
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
