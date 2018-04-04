import React from 'react';
import heroImg from "../assets/bigimage.jpg";

const HeroCTA = () => (
  <div className="hero-cta" style={{ backgroundImage: `url("${heroImg}")` }}>
    <div className="content">
      <h1>UTN, Paquetes de Graduación</h1>
      <h4>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </h4>
    </div>
  </div>
);

export default HeroCTA;