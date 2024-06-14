import {BrowserRouter, Route, Routes} from "react-router-dom";
import "antd/dist/antd"
import MenuBar from "./Components/Menu/Menu";
import {React} from 'react'
import 'antd/dist/reset.css';
import HomePage from "./Pages/HomePage";
import Dashboard from "./Pages/Dashboard";
import PuraPura from "./Pages/PuraPura";
import Leaf from "./Pages/Leaf";

function App() {
  return (
    <BrowserRouter>
    <div className="dflex">
      <header className="App-header">
      <MenuBar />
      </header>
      <div>
      <Rutas />
      </div>
    </div>
    </BrowserRouter>
  );
};


function Rutas() {
  return(
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/air" element={<Dashboard />}></Route>
      <Route path="/water" element={<Dashboard />}></Route>
      <Route path="/leaf" element={<Leaf />} ></Route>
      <Route path="/aboutus" element={<Dashboard />} ></Route>
      <Route path="*" element={<> 404-Not found</>}></Route>
      </Routes>
    </div>
  );
};

export default App;