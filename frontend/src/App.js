import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import logo from './logo.svg';
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext(null);

const AppLayout = () => (
  <SideBar>   
    <Outlet />   
  </SideBar>

  );

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? darkTheme : lightTheme;
  const [polygonCoords] = useState([
    [-16.46774917419887,-68.16508405348003],[-16.47228222197347,-68.16624767558852],[-16.47581968066961,-68.16583097354322],[-16.47690587359456,-68.16540238058892],[-16.47803008798767,-68.16480839667672],[-16.48057727961038,-68.16314709117034],[-16.48345644668849,-68.16140266259828],[-16.48636391880623,-68.15310737166891],[-16.48379165398039,-68.15052589943632],[-16.4687539199209,-68.1552709964693],[-16.46446113841828,-68.16148264606821],[-16.46586163756203,-68.16411413121058],[-16.46774917419887,-68.16508405348003]
  ]);
 
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    
                    <Router>
      
                        <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/" element={<AppLayout />} >
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="*" element={<> 404-Not found</>} />
                          </Route>
                        </Routes>

                    </Router>
                    
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
  );
}

export default App;
