import Mapa from '../Components/Map'
import { Tabs } from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;


const Leaf = () => {
    const [center] = useState([51.505, -0.09]);
    const [zoom] = useState(13);
    const [markers] = useState([
    { position: [51.505, -0.09], popupText: 'Marker 1' },
    { position: [51.515, -0.1], popupText: 'Marker 2' },
    ]);
    return (
      <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Map" key="1">
        <Mapa center={center} zoom={zoom} markers={markers} />
      </TabPane>
      <TabPane tab="spectral sign" key="2">
      <h1> señal espectral </h1>
      </TabPane>
      <TabPane tab="Images" key="3">
      <h1> imagenes vegetacion </h1>
      </TabPane>
      <TabPane tab="Description" key="4">
      <h1> Descripcion vegetacion </h1>
      </TabPane>
    </Tabs> 
    )
}

export default Leaf