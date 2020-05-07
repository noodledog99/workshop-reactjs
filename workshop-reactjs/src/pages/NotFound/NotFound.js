import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div style={{backgroundColor:"#3273DC"}}>
      <div className="notfound-area d-flex align-items-center justify-content-center">
        <div class="container">
          <h1>
            <i class="fa fa-map-signs" aria-hidden="true"></i> NotFound
          </h1>
          <p>the page you are looking for is not found</p>
        </div>
      </div>
    </div>
  );
}
