import {React, useState} from 'react'
import {Link, useLocation} from 'react-router-dom';
import { Menu, Drawer } from "antd";
import { FaUser, FaWind, FaWater, FaHouseUser} from "react-icons/fa";
import { GiZigzagLeaf } from "react-icons/gi";
import 'antd/dist/reset.css';
import {MenuOutlined} from "@ant-design/icons"
import "./MenuStyle.css"
import logo from '../../assets/logo.png'

const MenuBar = () => {
  const[openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{height: "100%", backgroundColor:"rgb(0,255,150)"}}>
      <div className="menuIcon" style={{backgroundColor:"rgb(0,255,150)", height: "100%", paddingLeft: 12, paddingTop:12}}>
        <MenuOutlined theme="dark" style={{fontSize:30}}
        onClick={()=>{setOpenMenu(true);
        }}/>
      </div>
      <div>
      <div className="headerMenu" style={{height: "100%", backgroundColor:"rgb(0,255,150)"}}>
      <HoriMenu />
      </div>
      <Drawer 
      placement="left" open={openMenu} onClose={()=>{setOpenMenu(false)}} closable={false} Style={{backgroundColor:"rgb(0,255,150)", color:"rgb(0,255,150)"}}>
          <MenuOutlined theme="dark" style={{fontSize:30, backgroundColor:"rgb(0,255,150)"}}
        onClick={()=>{setOpenMenu(false);}}/>
          <HoriMenu isInline/>
        </Drawer>
    </div>
    </div>
    

  );
};

function HoriMenu ({isInline = false}) {
  const location = useLocation();
  return (
    <Menu
        style={{backgroundColor: "rgb(0,255,150)", color:"rgb(0,255,150)", fontSize:30, border:'none'}}
        mode={isInline ? "inline":"horizontal"}
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
      >
        <img src={logo} alt="Logo"/>
        <Menu.Item key="/">
          <FaHouseUser />
          <Link to="/"></Link>
          Home
        </Menu.Item>
        <Menu.Item key="/air">
          <FaWind />
          Air Service
          <Link to="/air"></Link>
        </Menu.Item>
        <Menu.Item key="/water">
          <FaWater />
          <span>Water Service</span>
          <Link to="/water"></Link>
        </Menu.Item>
        <Menu.Item key="/leaf">
          <GiZigzagLeaf />
          <span>Leaf Service</span>
          <Link to="/leaf"></Link>
        </Menu.Item>
        <Menu.Item key="/aboutus">
          <FaUser />
          <span>About Us</span>
          <Link to="/aboutus"></Link>
        </Menu.Item>
      </Menu>
  )
}

export default MenuBar