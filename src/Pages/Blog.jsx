import "../Styles/Style.css"
import "../Styles/Blog.css";

import Banner_responsive from "../Components/BannerResponsive";
import coder from "../Images/blog/coder.jpg";
import croissance from "../Images/blog/croissance.jpg";
import google from "../Images/blog/google.jpg";
import screens from "../Images/blog/screens.jpg";
import seo from "../Images/blog/seo.jpg";
import technos from "../Images/blog/technos.png";


function ArticleBlog(props) {
    return (
      <section className={props.className}>
        <img className="card-img-top" src={props.src} alt={props.alt} />
        <div className="card-body px-3 py-0">
          <h3 className="card-title pt-3">{props.intitulé}</h3>
          <p className="description-bp">{props.description}</p>
          <button type="button" className="btn btn-primary mb-3">
            Lire la suite
          </button>
        </div>
        <div className="card-footer px-3">
          <small className="card-footer-content-bp m-0">
            Publié le <time dateTime={props.dateTime}>{props.date}</time>
          </small>
        </div>
      </section>
    );
  }
  
  export default function Blog() {
    return (
      <main className="container-fluid-xl blog-page">
        <section className="text-center d-flex flex-column align-items-center">
          <Banner_responsive />
          <h2 className="h2-bp text-uppercase mt-5 fs-1">blog</h2>
          <p className="text-intro">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          <div className="blue-stroke-bp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary"></div>
        </section>
        <div className="row container-article-blog grid column-gap-4">
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3 mb-3"
            src={coder}
            alt="Images de lignes de code HTML."
            intitulé="Coder son site en HTML/CSS"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-08-22"
            date="22 août 2022"
          />
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3 mb-3"
            src={croissance}
            alt="Image de  piles de pièces dans un bocal remplit"
            intitulé="Vendre ses produits sur le web"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-08-20"
            date="20 août 2022"
          />
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3 mb-3"
            src={google}
            alt="Image d'un ordinateur portable allumé et un smartphone posés sur une table"
            intitulé="Se positionner sur Google"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-08-01"
            date="1 août 2022"
          />
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3 mb-3"
            src={screens}
            alt="Image d'un ordinateur de bureau, un ordinateur portable, une tablette et 
                      un clavier d'ordinateur posés sur une table"
            intitulé="Coder en responsive design"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-07-31"
            date="31 juillet 2022"
          />
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3 mb-3"
            src={seo}
            alt="Image remplis de mots sur fond bleu sur le thème"
            intitulé="Techniques de référencement"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-07-30"
            date="30 juillet 2022"
          />
          <ArticleBlog
            className="card article-blog col-md-5 col-lg-3"
            src={technos}
            alt=" Images de différents logos de langage informatique"
            intitulé="Apprendre à coder"
            description="Some quick example text to build on the card title and make up
                      the bulk of the card's content."
            dateTime="2022-07-12"
            date="12 juillet 2022"
          />
        </div>
      </main>
    );
  }