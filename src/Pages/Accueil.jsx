import "../Styles/Style.css";
import "../Styles/Accueil.css";

import johnDoeAbout from "../Images/john-doe-about.jpg";

export default function Accueil() {
  return (
    <main className="container-fluid-lg accueil">
      <div className="bg-image d-flex justify-content-center align-items-center">
        <section className="presentation text-white text-center">
          <h1 className="titre mb-4">Bonjour, je suis John Doe</h1>
          <h2 className="h2-hp mb-4">Développeur web full stack</h2>
          <a
            className="btn btn-primary btn-sm px-4"
            href="#a-propos"
            role="button"
          >
            En savoir plus
          </a>
        </section>
      </div>
      <div className="a-propos pt-5" id="a-propos">
        <div className="card shadow py-5 px-4">
          <div className="card-body">
            <div className="row">
              <section className="col-md-6">
                <h3 className="card-title titres titre-a-propos pb-2 mb-4 border-bottom border-primary border-2">
                  À propos
                </h3>
                <p className="card-text texte-a-propos">
                  Passionné par l'informatique et les nouvelles technologies,
                  j'ai suivi une formation d'
                  <strong>intégrateur-développeur web</strong> au CEF. Au cours
                  de cette formation, j'ai pu acquérir des bases solides pour
                  travailler dans le domaine du{" "}
                  <strong>développement web</strong>.
                </p>
                <p className="card-text texte-a-propos">
                  Basé à Lyon, je suis en recherche d'une alternance au sein
                  d'une agence digitale pour consolider ma formation de{" "}
                  <strong>développeur web full stack</strong>.
                </p>
                <p className="card-text texte-a-propos">
                  J'accorde une attention particulière à la qualité du code que
                  j'écris et je respecte les bonnes pratiques du web.
                </p>
              </section>
              <section className="col-md-6">
                <img
                  src={johnDoeAbout}
                  className="john-doe-about pt-3 pb-2"
                  alt="Image d'un homme représentant John Doe travaillant sur un PC"
                />
                <h4 className="card-text titres competences mb-1">
                  Mes compétences
                </h4>
                
                <label className="progress-labels pb-2 text-uppercase ">
                  html5 90%
                </label>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="html"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <label className="progress-labels pt-3 pb-2 text-uppercase ">
                  css3 80%
                </label>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="css"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <label className="progress-labels pt-3 pb-2 text-uppercase ">
                  javascript 70%
                </label>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="javascript"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <label className="progress-labels pt-3 pb-2 text-uppercase ">
                  php 60%
                </label>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="php"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <label className="progress-labels pt-3 pb-2 text-uppercase ">
                  react 50%
                </label>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="react"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "50%" }}></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
