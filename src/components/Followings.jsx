import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Title from "./Title";

function Followings() {
  const parametre = useParams();

  const [following, setFollowing] = useState([]);

  function getFollowing() {
    axios
      .get("https://api.github.com/users/" + parametre.username + "/following")
      .then(function (veri) {
        setFollowing(veri.data);
      });
  }

  useEffect(getFollowing, []);

  return (
    <div className="container">
    <Title/>
      <Link to="/">
        <button className="btn btn-primary mt-5">Home Page</button>
      </Link>
      <div className="container mt-5 d-flex flex-wrap">
        {following.map(function (veri, index) {
          return (
            <div className="card m-1" style={{ width: "18rem" }}>
              <img
                src={following[index].avatar_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{following[index].login}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{following.following}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Followings;
