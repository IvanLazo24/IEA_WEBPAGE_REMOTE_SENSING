import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'


const Dashboard = () => {
  const[value]=useState(['https://pnt.ign.es/PNTtheme/images/imgPNT/5_2_Sentinel-2_L2A-timelapse-deltaebro-ano2018.gif'])
  return(
  
  <div className="App">
    <section>
    <div className="title"> 
      <h1 style={{color:'red'}}>Welcome to AEI Remote Sensing. Select the data inside to sidebar</h1></div>
      <img src={localStorage.getItem("profilePic")} />
      <img src={value} />
    </section>
    <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={40} style={{ color: '#33ffac', marginRight: '2rem' }} />
                        <div>
                            <p style={{color:'red'}}>Campus Universitario, final Av. Andrés Bello, Calle 32 Cota Cota</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4 style={{color:'red'}}><FaPhone size={40} style={{ color: '#33ffac', marginRight: '2rem' }} /> +591 2 774001 o +591 2 619561</h4>
                    </div>
                    <div className='email'>
                        <h4 style={{color:'red'}}><FaMailBulk size={40} style={{ color: '#33ffac', marginRight: '2rem' }} /> iea@umsa.bo</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About us</h4>
                    <p>"Consideramos que es necesario desarrollar una estrategia Nacional de investigación 
                        en Electrónica Aplicada, debido a que la problemática nacional exige elaborar 
                        proyectos de investigación rentables para captar recursos económicos y financieros, 
                        ahorro de divisas y hacer frente a la dependencia tecnológica"</p>
                    <div className='social'>
                        <FaFacebook size={50} style={{ color: '#33ffac', marginRight: '1rem' }} />
                        <FaTwitter size={50} style={{ color: '#33ffac', marginRight: '1rem' }} />
                        <FaLinkedin size={50} style={{ color: '#33ffac', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
  </div>
  ); 

};

export default Dashboard;
