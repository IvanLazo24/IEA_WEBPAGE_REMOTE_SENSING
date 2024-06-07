import React, { useState } from "react";
const Dashboard = () => {
  const[value]=useState(['http://zientziajoleak.pbworks.com/f/1527515434/AnetoStackGIF.gif'])
  return(
  
  <div className="App">
    <section>
    <div className="title"> Welcome to AEI Remote Sensing <img src={localStorage.getItem("profilePic")} /></div>
      <img src={value} />
    </section>

  </div>
  ); 

};

export default Dashboard;
