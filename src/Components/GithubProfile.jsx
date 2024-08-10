import React, { useState, useEffect } from "react";

import "../Styles/Style.css";
import "../Styles/Github_profile.css";
import PhotoDeProfilJohnDoe from "../Images/Photo_de_profil_John_Doe.png";

export default function Github_profile() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <main className="container jd-profile-page">
      <section className="presentation-jdpp">
        <h1 className="h1-jdpp fs-2">Github user</h1>
        <h2 className="h2-jdpp fs-4">{user.name}</h2>
        <img
          className="pdp-jd"
          src={PhotoDeProfilJohnDoe}
          alt="Image d'un dessin de chat bleu type dessin animé"
        />
      </section>
      <ul className="jd-infos">
        <li className="li-jd-infos text-center">{user.bio}</li>
        <li className="li-jd-infos">Abonnés : {user.followers}</li>
        <li className="li-jd-infos">Abonnements : {user.following}</li>
        <li className="li-jd-infos">Crée le : {user.created_at}</li>
        <li className="li-jd-infos">Modifié le : {user.updated_at}</li>
        <li className="li-jd-infos text-center">
          URL repositories :{" "}
          <a
            href="https://api.github.com/users/github-john-doe/repos"
            className="url-repos text-primary"
          >
            {user.repos_url}
          </a>
        </li>
      </ul>
    </main>
  );
}
