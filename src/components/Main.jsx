import React, { useEffect, useState } from "react";
import UserInfos from "./UserInfos";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Title from "./Title";

function Main() {
  const [profil, setProfil] = useState("");

  const query = new URLSearchParams(useLocation().search);
  const searchingWord = query.get("userName");

  console.log("pp", profil.name);

  function getGithubDatas() {
    axios
      .get("https://api.github.com/users/" + searchingWord)
      .then(function (user) {
        if (user.data.login === "null") {
          setProfil(profil);
        } else {
          setProfil(user.data);
        }
      });
  }

  useEffect(getGithubDatas, []);

  console.log(profil);

  return (
    <div className="container mt-5">
      <h3 className="text-center mt-5">Github Api User Finder</h3>

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

      {profil.name === undefined ? (
        <img
          className="mt-5"
          src="https://th.bing.com/th/id/Rcd9ffe7f99f8e6f9e3ad0b761b7148ca?rik=vpjKXhGPq%2fgbkQ&pid=ImgRaw"
          style={{ width: "50%", alignItems: "center" }}
        />
      ) : (
        <UserInfos
          key={profil.id}
          name={profil.name}
          login={profil.login}
          photo={profil.avatar_url}
          followers={profil.followers}
          following={profil.following}
          repos={profil.public_repos}
        />
      )}

      <div></div>
    </div>
  );
}

export default Main;
