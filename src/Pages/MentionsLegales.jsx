import React, { useEffect } from "react";

import "../Styles/Style.css";
import "../Styles/Mentions_legales.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Mentions_legales() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".accordion-button");
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded");
        if (expanded === "true") {
          button.style.color = "#0d6efd";
        } else {
          button.style.color = "#1e1e1e";
        }
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {
          const expanded = button.getAttribute("aria-expanded");
          if (expanded === "true") {
            button.style.color = "#0d6efd";
          } else {
            button.style.color = "#1e1e1e";
          }
        });
      });
    };
  }, []);

  return (
    <main className="container-fluid-md mentions_legales">
      <section className="d-flex flex-column align-items-center">
        <h2 className="h2-lnp text-uppercase mt-4 fs-1">mentions légales</h2>
        <div className="blue-stroke-lnp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary"></div>
      </section>
      <div className="accordion pb-4" id="chapters">
        <div className="accordion-item">
          <h3 className="accordion-header" id="heading-1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#chapter-1"
              aria-expanded="true"
              aria-controls="chapter-1"
              style={{ color: "#0d6efd" }}
            >
              Éditeur du site
            </button>
          </h3>
          <div
            id="chapter-1"
            className="accordion-collapse collapse show"
            aria-labelledby="heading-1"
            data-bs-parent="#chapters"
          >
            <div className="accordion-body">
              <h4>John Doe</h4>
              <div className="d-flex">
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "black", paddingRight: "4px" }}
                  />
                </span>
                <address className="m-0">
                  <p className="m-0">
                    40 Rue Laure Diebold <br></br>
                    69009 Lyon, France
                  </p>
                </address>
              </div>
              <div className="d-flex">
                <span>
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    style={{ color: "black", paddingRight: "4px" }}
                  />
                </span>
                <address className="m-0">
                  <a href="tel:0620304050" className="text-primary">
                    06 20 30 40 50
                  </a>
                </address>
              </div>
              <div className="d-flex">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "black", paddingRight: "4px" }}
                  />
                </span>
                <address className="m-0">
                  <a href="mailto:john.doe@gmail.com" className="text-primary">
                    john.doe@gmail.com
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header" id="heading-2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#chapter-2"
              aria-expanded="false"
              aria-controls="chapter-2"
            >
              Hébergeur
            </button>
          </h3>
          <div
            id="chapter-2"
            className="accordion-collapse collapse"
            aria-labelledby="heading-2"
            data-bs-parent="#chapters"
          >
            <div className="accordion-body">
              <h4>Always Data</h4>
              <address>
                <p>
                  91 rue du Faubourg Saint Honoré <br></br>
                  75008 Paris
                </p>
              </address>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "black", paddingRight: "4px" }}
                  />
                </span>
                <a
                  href="https://www.alwaysdata.com/fr/"
                  className="text-primary"
                >
                  www.alwaysdata.com
                </a>
              </address>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header" id="heading-3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#chapter-3"
              aria-expanded="false"
              aria-controls="chapter-3"
            >
              Crédits
            </button>
          </h3>
          <div
            id="chapter-3"
            className="accordion-collapse collapse"
            aria-labelledby="heading-3"
            data-bs-parent="#chapters"
          >
            <div className="accordion-body">
              <h4>Crédits</h4>
              <p>Site développé par John Doe, étudiant du CEF.</p>
              <p>
                Les images libres de droit sont issues du site{" "}
                <a href="https://pixabay.com/fr/" className="text-primary">
                  Pixabay
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
