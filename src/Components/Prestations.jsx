import "../Styles/Prestations.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

export default function Prestations() {
  return (
    <div className="row prestations justify-content-center grid gap-4">
      <div className="card col-md-3 prestation-1 text-center border-0 rounded-4 shadow-sm">
        <div className="card-body services-card-content d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={faDisplay}
            size="2xl"
            style={{ color: "#0d6efd" }}
            className="fa-icon"
          />
          <h3 className="card-title card-title-p text-uppercase pt-3">
            ux design
          </h3>
          <p className="description-p">
            L'<strong>UX Design</strong> est une méthode de conception centrée
            sur l'utilisateur. Son but est d'offrir une expérience de navigation
            optimale à l'internaute.
          </p>
        </div>
      </div>
      <div className="card col-md-3 prestation-2 text-center border-0 rounded-4 shadow-sm">
        <div className="card-body services-card-content d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={faFileCode}
            size="2xl"
            style={{ color: "#0d6efd" }}
            className="fa-icon"
          />
          <h3 className="card-title card-title-p text-uppercase pt-3">
            développement web
          </h3>
          <p className="description-p">
            Le <strong>développement de sites web</strong> repose sur
            l'utilisation des languages <span className="underlined">HTML</span>
            , <span className="underlined">CSS</span>,{" "}
            <span className="underlined">JavaScript</span> et{" "}
            <span className="underlined">PHP</span>.
          </p>
        </div>
      </div>
      <div className="card col-md-3 prestation-3 text-center border-0 rounded-4 shadow-sm">
        <div className="card-body services-card-content d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlassDollar}
            size="2xl"
            style={{ color: "#0d6efd" }}
            className="fa-icon"
          />
          <h3 className="card-title card-title-p text-uppercase pt-3">
            référencement
          </h3>
          <p className="description-p">
            Le <strong>référencement naturel</strong> d'un site, aussi appelé{" "}
            <span className="underlined">SEO</span>, consiste à mettre des
            techniques en oeuvre pour
            <span className="fst-italic"> améliorer sa position</span> dans les
            résultats des moteurs de recherche.
          </p>
        </div>
      </div>
    </div>
  );
}