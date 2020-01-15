import React from "react";
import InfoCard from "./InfoCard";
import { content } from "../data/landing-page.json";

const LandingPage = () => (
  <main className="landing-page">
    <img src="https://picsum.photos/280/210" alt="Logo" />
    <div className="air">
      <h1>Feel the air</h1>
      <h2>{content.h2}</h2>
      <a className="air__btn" href="/kampania">
        Zobacz jak
      </a>
    </div>
    <InfoCard
      className="project"
      header="Nasz projekt"
      content={content.project}
    />
    <div className="map">
      <div className="map__header">
        <h2 className="map__h">Mapa z pomiarami z naszych czujników</h2>
      </div>
      <div className="map__img">
        <img src="https://picsum.photos/100/130" alt="Mapa" />
      </div>
      <div className="map__content">
        <p className="map__p">{content.p}</p>
      </div>
    </div>
  </main>
);

export default LandingPage;
