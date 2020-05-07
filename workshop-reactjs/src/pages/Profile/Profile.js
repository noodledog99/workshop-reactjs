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
    await getUserById(localStorage.getItem('user_id')).then((res) => {
      if (res.status === "success") {
        setUserProfile(res.data);
      }
    });
  };

  return (
    <div>
      <div className="profile-area d-flex align-items-center justify-content-center">
        <div className="container">
          <h1>Profile Detail</h1>
          {
            <div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <h2>{userProfile.name}</h2>
                  <div className="btn-edit">
                    {/* <button className="btn btn-outline-light text-black-50 border">
                      Edit Profile
                    </button> */}
                    <Link to={`/edit-profile/${localStorage.getItem('user_id')}`} className="btn btn-outline-light text-black-50 border">
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Age</strong> {userProfile.age}{" "}
                    <strong>Salary</strong> {userProfile.salary}
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
