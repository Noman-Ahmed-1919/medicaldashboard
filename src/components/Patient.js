import React from "react";
import imgpatient1 from "../images/imgpatient1.png";

import payment1 from "../images/payment1.png";
import payment2 from "../images/payment2.png";
import payment3 from "../images/payment3.png";
import payment4 from "../images/payment4.png";
import payment5 from "../images/payment5.png";
import {
  Routes,
  Route,
  NavLink,
  Redirect,
  Link,
} from "react-router-dom";


const Patient = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           
           <div   style={{  marginTop: "30px" }}>
           <img
              src={imgpatient1} style={{ width: "100%" }}/>
           </div>
           

            <div id="secpatient">
              <h4 className="pay">Payments</h4>

              <div className="cashdiv">
                <img src={payment1} style={{ width: "70%", height: "70%" }} />
                <img src={payment2} style={{ width: "70%", height: "70%" }} />
                <img src={payment3} style={{ width: "70%", height: "70%" }} />
                <img src={payment4} style={{ width: "70%", height: "70%" }} />
                <img src={payment5} style={{ width: "80%", height: "82%" }} />
              </div>
            </div>


            <div className="btnssec">
              <button className="backbtn1">Back</button>
              <button className="nextbtn1">
              <NavLink to="/paymentcom">   Next Stop</NavLink>

             
                
                </button>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
