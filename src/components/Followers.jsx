import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Followers() {
  const parametre = useParams();

  const [follower, setFollower] = useState([]);

  function getFollowers() {
    axios
      .get("https://api.github.com/users/" + parametre.username + "/followers")
      .then(function (veri) {
        setFollower(veri.data);
      });
  }

 

  

  useEffect(getFollowers, []);


  return (
    <div className="container mt-5 d-flex flex-wrap">
    
      {follower.map(function (veri,index) {
        return (
          <div className="card m-1" style={{ width: "18rem" }}>
            <img src={follower[index].avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{follower[index].login}</h5>
             
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{follower.following}</li>
            </ul>
           
          </div>
        );
      })}
    </div>
  );
}

export default Followers;
