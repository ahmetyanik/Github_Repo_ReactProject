import React from "react";
import UserInfos from "./UserInfos";

function Main() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        
      </div>
      <UserInfos/>
    </div>
  );
}

export default Main;
