import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Repositories(props) {
  const parametre = useParams();
  const [repo, setRepo] = useState([]);

  function getRepos() {
    axios
      .get("https://api.github.com/users/" + parametre.username + "/repos")
      .then(function (veri) {
        setRepo(veri.data);
      });
  }

  useEffect(getRepos, []);

  console.log(repo);

  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary mt-5">Home Page</button>
      </Link>
      <div>
        <h3>{props.name}</h3>
        <div className="container mt-5 d-flex flex-wrap">
          {repo.map(function (veri, index) {
            return (
              <a href={veri.html_url} target="blank">
                <div class="alert alert-primary m-2">
                  {index + 1}.{veri.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Repositories;
