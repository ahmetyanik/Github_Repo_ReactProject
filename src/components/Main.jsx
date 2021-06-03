import React, { Profiler, useEffect, useState } from "react";
import UserInfos from "./UserInfos";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Followers from "./Followers";

function Main() {
  const [profil, setProfil] = useState([]);

  const query = new URLSearchParams(useLocation().search);
  const searchingWord = query.get("userName");

  console.log(searchingWord);

  function getGithubDatas() {
    axios
      .get("https://api.github.com/users/" + searchingWord)
      .then(function (user) {
        setProfil(user.data);
      });
  }

  useEffect(getGithubDatas, []);

  console.log(profil);

  return (
    <div className="container mt-5">

    <h3>Github Api Repo</h3>


      <form>
        <div className="d-flex justify-content-center">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              name="userName"
            />
          </div>
        </div>
      </form>
      <UserInfos 
          name={profil.name}
          login={profil.login}
          photo={profil.avatar_url}
          followers={profil.followers}
          following={profil.following}
          repos={profil.public_repos}
      />


      
    </div>
  );
}

export default Main;
