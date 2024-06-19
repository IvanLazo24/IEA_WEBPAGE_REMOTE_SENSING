import Mapa from '../Components/Map';
import GroupImages from './GroupImages';
import { Tabs } from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;


const Leaf = () => {
    const [center] = useState([-16.478244291518404, -68.15691730523561]);
    const [zoom] = useState(14);
    const [markers] = useState([
    { position: [-16.478244291517514, -68.15691730523561], popupText: 'Marker 1' },
    { position: [-16.478244291518500, -68.15691730523545], popupText: 'Marker 2' },
    ]);
    return (
      <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Map" key="1">
        <Mapa center={center} zoom={zoom} markers={markers} />
      </TabPane>
      <TabPane tab="spectral sign" key="2">
      <GroupImages />
      </TabPane>
      <TabPane tab="Images" key="3">
      <GroupImages />
      </TabPane>
      <TabPane tab="Description" key="4">
      <h1> EUCALIPTO</h1>
      <h2>NOMBRE CIENTIFICO</h2>
      <h3>Eucalyptus</h3>
      <h2>FAMILIA</h2>
      <h3>Myrtaceae</h3>
      <h2>DIVISION</h2>
      <h3>Magnoliophyta</h3>
      <h2>CLASE</h2>
      <h3>Magnoliopsida</h3>
      <h2>DESCRIPCION</h2>
      <h3>Los eucaliptos o eucaliptas, Eucalyptus L'Hér., es un género de árboles de la familia de las mirtáceas. Existen alrededor de setecientas especies, la mayoría oriundas de Australia y Nueva Guinea. En la actualidad, se encuentran distribuidos por gran parte del mundo.</h3>
      </TabPane>
    </Tabs> 
    )
}

export default Leaf