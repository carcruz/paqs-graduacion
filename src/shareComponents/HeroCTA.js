import React from "react";
import heroImg from "../assets/bigimage.jpg";

const HeroCTA = () => (
  <div className="hero-cta" style={{ backgroundImage: `url("${heroImg}")` }}>
    <div className="content">
      <h1>UTN, Paquetes de Graduación</h1>
      <h4>
        Esta es una iniciativa promovida por estudiantes para crear una mejor
        experiencia en la adquisición de paquetes de graduación tanto en
        bachillerato como en licenciatura.
      </h4>
    </div>
  </div>
);

export default HeroCTA;
