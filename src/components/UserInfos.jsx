import React, { Profiler } from "react";
import { Link } from "react-router-dom";

function UserInfos(props) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "24rem" }}>
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.name === null ? props.login : props.name}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <Link to={`/followers/${props.login}`}>
            <li className="list-group-item">
              <button type="button" class="btn btn-primary">
                Followers{" "}
                <span class="badge bg-secondary">{props.followers}</span>
                <span class="visually-hidden">unread messages</span>
              </button>
            </li>
          </Link>
          <li className="list-group-item">
            <Link to={`/following/${props.login}`}>
              <button type="button" class="btn btn-primary">
                Following{" "}
                <span class="badge bg-secondary">{props.following}</span>
                <span class="visually-hidden">unread messages</span>
              </button>
            </Link>
          </li>
          <li className="list-group-item">
            <button type="button" class="btn btn-primary">
              Repositories <span class="badge bg-secondary">{props.repos}</span>
              <span class="visually-hidden">unread messages</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfos;
