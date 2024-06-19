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
    <div style={{backgroundColor:"rgb(0,211,147)"}}>
      <div className="menuIcon" style={{backgroundColor:"rgb(0,211,147)", height: "100%", paddingLeft: 12, paddingTop:12}}>
        <MenuOutlined theme="light" style={{fontSize:30}}
        onClick={()=>{setOpenMenu(true);
        }}/>
      </div>
      <div>
      <div className="headerMenu" style={{height: "100%", backgroundColor:"rgb(0,211,147)"}}>
      <HoriMenu />
      </div>
      <Drawer 
      placement="left" open={openMenu} onClose={()=>{setOpenMenu(false)}} closable={false} Style={{backgroundColor:"rgb(0,211,147)", color:"rgb(0,211,147)",height: "100%"}}>
          <MenuOutlined theme="light" style={{fontSize:19, backgroundColor:"rgb(0,211,147)",width:'100%'}}
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
        style={{backgroundColor: "rgb(0,211,147)", color:"rgb(0,150,250)", fontSize:15, border:'none',height: "100%",width:'100%'}}
        mode={isInline ? "inline":"horizontal"}
        theme="light"
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