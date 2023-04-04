import React from "react";
import rdoc1 from "../images/rdoc1.png";
import rrdoc1 from "../images/rrdoc1.png";
import dates from "../images/Dates.png";

import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

const Scheduleapptime = () => {

// const timeValue: Date = new Date("01/01/2023 08:30 AM");

// const minTime = new Date("01/01/2023 09:30 AM");
// const maxTime = new Date("01/01/2023 05:30 AM");



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="rightmaindiv">
              <div className="scheduleheader">
                <div className="firstdiv">
                  <h5>Schedule Appointment</h5>
                </div>

                <div className="maininp">
                  <div>
                    <p>Specialist Name</p>
                    <input className="inpdoc" placeholder="Select A doctor" />
                  </div>

                  <div>
                    <p>Department</p>
                    <input
                      className="inpdoc"
                      style={{ marginLeft: "10px" }}
                      placeholder="GP Department"
                    />
                  </div>
                </div>
              </div>
<div className="timepicker">
<TimePickerComponent placeholder="Select a Time" >

{/* value={timeValue}
min={minTime}
max={maxTime} */}
</TimePickerComponent>
</div>

<div>

<img src={dates} style={{width:"100%", marginTop:"40px", marginBottom:"20px"}} />
</div>



            </div>






            <div className="btnssec">
              <button className="backbtn">Back</button>
              <button className="nextbtn">Next Step</button>
            </div>
          </div>

          <div className="col-md-4" style={{ padding: "0px" }}>
            <div className="rightspecialdoc">
              <div className="specialdoc">
                <h5>Specialist doctor</h5>
              </div>
              <img style={{ width: "100%" }} src={rdoc1} />
            </div>

            <div className="rightspecialdoc" style={{ marginTop: "30px" }}>
              <div className="specialdoc">
                <h5>Patient Profile</h5>
              </div>
              <img style={{ width: "100%", height: "310px" }} src={rrdoc1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scheduleapptime;
