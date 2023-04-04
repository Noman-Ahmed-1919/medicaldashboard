import React from "react";
import Header from "./Header";
import Sidemenu from "./Sidemenu";
import Mainpage from "./Mainpage";
import Scheduleapp from "./Scheduleapp";
import Approuter from "./Approuter";

const Home = () => {
  return (
    <>
      <Header />

      <div id="wrapper">
        <Sidemenu />

        <div id="content-wrapper" className="d-flex flex-column">
          
          <div id="content">
            <Approuter />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
