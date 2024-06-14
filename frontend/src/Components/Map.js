import React from 'react';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapStyle.css'
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41]
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
  const Mapa = ({ center, zoom, markers }) => {
    return (
      <div className='main-map'>
        <MapContainer center={center} zoom={zoom} className="leaflet-container">
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
        </MapContainer>
      </div>
    );
  };
  
  export default Mapa;

  