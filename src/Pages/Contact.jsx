import "../Styles/Style.css";
import "../Styles/Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis.";
    }

    // Validation de l'email
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    // Validation du numéro de téléphone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide (10 chiffres).";
    }

    // Validation du sujet
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis.";
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      // Pas d'erreurs, on peut soumettre le formulaire
      console.log("Formulaire envoyé avec succès!", formData);

      // Réinitialiser les champs du formulaire et les messages d'erreur
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main className="container-fluid-xl">
      <div className="bg-image-cp">
        <div className="contact-page">
          <div className="card mx-3 mt-3">
            <div className="card-body px-5">
              <section className="text-center d-flex flex-column align-items-center">
                <h2 className="h2-cp text-uppercase mt-4 fs-1">me contacter</h2>
                <p className="intro-text-cp">
                  Pour me contacter en vue d'un entretien ou d'une future
                  collaboration, merci de remplir le formulaire de contact.
                </p>
                <div className="blue-stroke-cp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary"></div>
              </section>
              <div className="row">
                <section className="col-md-6">
                  <h3 className="h3-cp">Formulaire de contact</h3>
                  <div className="blue-stroke-cp-2 border border-top border-start-0 border-end-0 border-bottom-0 border-2 border-primary"></div>
                  <form
                    className="d-flex flex-column align-items-center"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                    <input
                      type="text"
                      className="form-control mb-3"
                      id="email"
                      name="email"
                      placeholder="Votre adresse email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <input
                      type="text"
                      className="form-control mb-3"
                      id="phone"
                      name="phone"
                      placeholder="Votre numéro de téléphone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

                    <input
                      type="text"
                      className="form-control mb-3"
                      id="subject"
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}

                    <textarea
                      className="form-control mb-3"
                      id="message"
                      name="message"
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

                    <button type="submit" className="btn btn-primary btn-lg mb-3">
                      Envoyer
                    </button>
                  </form>
                </section>
                <section className="d-flex flex-column col-md-6 pb-5">
                  <h3 className="h3-cp">Mes coordonnées</h3>
                  <div className="blue-stroke-cp-2 border border-top border-start-0 border-end-0 border-bottom-0 border-2 border-primary"></div>
                  <div className="d-flex">
                    <span className="span-cp-1">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#434343", paddingRight: "4px" }}
                      />
                    </span>
                    <address className="m-0">
                      <p className="m-0">
                        40 Rue Laure Diebold, 69009 Lyon, France
                      </p>
                    </address>
                  </div>
                  <div className="d-flex mb-3">
                    <span>
                      <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        style={{ color: "#434343", paddingRight: "4px" }}
                      />
                    </span>
                    <address className="m-0">
                      <p className="m-0">06 20 30 40 50</p>
                    </address>
                  </div>
                  <iframe
                    className="iframe-cp"
                    title="john-doe-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754104!2d4.79640397661413!3d45.77866571240152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1712264474011!5m2!1sfr!2sfr"
                    height="340"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
