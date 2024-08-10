import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Styles/Footer.css";
import "../Styles/Style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logoGithub from "../Images/Logo_de_Github.png";
import logoTwitter from "../Images/Logo_de_Twitter.png";
import logoLinkedin from "../Images/Logo_de_Linkedin.png";

function FooterElement(props) {
  
  const socialElements = props.elements.slice(-3);

  return (
    <div className={props.className}>
      <h2 className="h2-footer">{props.sousTitre}</h2>
      <ul className="ul-footer">
        
        {props.elements.map((element, index) => (
          <li key={element.id}>
            
            <div
              className="icon-link-container"
              onClick={() => (window.location.href = element.page)}
            >
              
              {props.showIcon && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xs"
                  style={{ color: "#116dfe", paddingRight: "1%" }}
                />
              )}
              {props.colonne === 1 && index < 3 ? (
                <p>{element.text}</p>
              ) : (
                <Link className={props.className} to={element.page}>
                  {element.text}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      {props.showSocialIcons && (
        <div className="social-icons">
          <ul>
            {socialElements.map((element) => (
              <li key={element.id}>
                <a
                  href={element.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={element.src} alt={element.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const colonne1 = [
    { text: "40 Rue Laure Diebold", id: "rue" },
    { text: "69009 Lyon, France", id: "cp-pays" },
    { text: "Téléphone : 06.20.30.40.50", id: "tel" },
    {
      href: "https://github.com/github-john-doe",
      image: "#",
      src: logoGithub,
      alt: "Logo de Github.",
      id: "logo-github",
    },
    {
      href: "https://twitter.com/JohnDoe1410056",
      image: "#",
      src: logoTwitter,
      alt: "Logo de Twitter.",
      id: "logo-Twitter",
    },
    {
      href: "https://www.linkedin.com/in/john-doe-169a69302/",
      image: "#",
      src: logoLinkedin,
      alt: "Logo de Linkedin.",
      id: "logo-Linkedin",
    },
  ];

  const colonne2 = [
    {
      text: "Accueil",
      page: "/",
      id: "accueil",
      icon: "<FontAwesomeIcon icon={faChevronRight} style={{color: `#116dfe`,}} />",
    },
    { text: "À propos", page: "/", id: "a-propos" },
    { text: "Services", page: "/ServicesPage", id: "services" },
    { text: "Me contacter", page: "/ContactPage", id: "contact" },
    {
      text: "Mentions légales",
      page: "/LegalNoticePage",
      id: "mentions-legales",
    },
  ];

  const colonne3 = [
    { text: "Fresh food", page: "/ProductionsPage", id: "fresh-food-project" },
    {
      text: "Restaurant Akira",
      page: "/ProductionsPage",
      id: "restaurant-akira-project",
    },
    {
      text: "Espace bien-être",
      page: "/ProductionsPage",
      id: "espace-bien-etre-project",
    },
  ];

  const colonne4 = [
    {
      text: "Coder son site en HTML/CSS",
      page: "/BlogPage",
      id: "article-blog-1",
    },
    {
      text: "Vendre ses produits sur le web",
      page: "/BlogPage",
      id: "article-blog-2",
    },
    {
      text: "Se positionner sur Google",
      page: "/BlogPage",
      id: "article-blog-3",
    },
  ];
  return (
    <footer className="container-fluid-xl">
      {viewportWidth < 992 ? (
        <>
          <section className="footer-main-content row pt-5">
            <div className="footer-element-1-2 col-lg-5">
              <FooterElement
                className="footer-elements"
                sousTitre="John Doe"
                elements={colonne1}
                colonne={1}
                showSocialIcons={true}
              ></FooterElement>
              <FooterElement
                className="footer-elements"
                sousTitre="Liens utiles"
                elements={colonne2}
                showIcon={true}
              ></FooterElement>
            </div>
            <div className="footer-element-3-4 col-lg-5">
              <FooterElement
                className="footer-elements"
                sousTitre="Mes dernières réalistions"
                elements={colonne3}
                showIcon={true}
              ></FooterElement>
              <FooterElement
                className="footer-elements"
                sousTitre="Mes derniers articles"
                elements={colonne4}
                showIcon={true}
              ></FooterElement>
            </div>
          </section>
          <small className="copyright text-white text-center py-3 mb-3">
            © Designed by John Doe
          </small>
        </>
      ) : (
        <>
          <section className="footer-main-content row pt-5">
            <FooterElement
              className="footer-elements col-lg-3"
              sousTitre="John Doe"
              elements={colonne1}
              colonne={1}
              showSocialIcons={true}
            ></FooterElement>
            <FooterElement
              className="footer-elements col-lg-3"
              sousTitre="Liens utiles"
              elements={colonne2}
              showIcon={true}
            ></FooterElement>
            <FooterElement
              className="footer-elements col-lg-3"
              sousTitre="Mes dernières réalisations"
              elements={colonne3}
              showIcon={true}
            ></FooterElement>
            <FooterElement
              className="footer-elements col-lg-3"
              sousTitre="Mes derniers articles"
              elements={colonne4}
              showIcon={true}
            ></FooterElement>
          </section>
          <small className="copyright text-white text-center py-3 mb-3">
            © Designed by John Doe
          </small>
        </>
      )}
    </footer>
  );
}
