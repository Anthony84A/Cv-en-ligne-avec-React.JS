import "../Styles/Style.css";
import "../Styles/Services.css";

import Prestations from "../Components/Prestations";
import ChangeBanner from "../Components/BannerResponsive";

function Card({ children }) {
  return <section>{children}</section>;
}

export default function Services(props) {
  return (
    <main className="services">
      <section className="text-center d-flex flex-column align-items-center">
        <ChangeBanner />
        <h2 className="h2-sp text-uppercase fs-1">Mon offre de services</h2>
        <p className="text-intro">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className="blue-stroke-sp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary"></div>
      </section>
      <Card>
        <Prestations />
      </Card>
    </main>
  );
}