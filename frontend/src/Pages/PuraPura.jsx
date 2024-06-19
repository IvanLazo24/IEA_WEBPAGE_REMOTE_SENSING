import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaf from "../Components/Leaf"
import TableLeaf from '../Components/TableLeaf';

const PuraPura = () => {

  return(
  <div className="leaf">
    <h1> INFORMACION DE PLANTAS </h1>
    < TableLeaf />
    < Leaf/>
  </div>
  ); 
};

export default PuraPura;
