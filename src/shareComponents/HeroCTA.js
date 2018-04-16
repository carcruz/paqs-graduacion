import React from "react";
import heroImg from "../assets/bigimage.jpg";

const HeroCTA = () => (
  <div className="hero-cta" style={{ backgroundImage: `url("${heroImg}")`, lineHeight: "2" }}>
    <div className="content">
      <h1>UTN, Paquetes de Graduación</h1>
      <h4 style={{  lineHeight: "2" }}>
        Propuesta de paquetes de graduación en los niveles de Bachillerato y
        Licenciatura en la Sede Central, horario nocturno de Universidad Técnica
        Nacional
      </h4>
    </div>
  </div>
);

export default HeroCTA;
