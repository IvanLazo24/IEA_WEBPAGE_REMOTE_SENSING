import Mapa from "../Components/Map";
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';

const PuraPura = () => {
  const [center] = useState([51.505, -0.09]);
  const [zoom] = useState(13);
  const [markers] = useState([
    { position: [51.505, -0.09], popupText: 'Marker 1' },
    { position: [51.515, -0.1], popupText: 'Marker 2' },
  ]);

  return(
  <div className="leaf">
    <h1> Mapa dinamico </h1>
    <Mapa center={center} zoom={zoom} markers={markers} />
  </div>
  ); 
};

export default PuraPura;
