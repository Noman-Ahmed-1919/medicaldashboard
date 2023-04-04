import React from "react";
import rdoc1 from "../images/rdoc1.png";
import rrdoc1 from "../images/rrdoc1.png";
import payround from "../images/payround.png";
import payround1 from "../images/payround2.png";
import pdf from "../images/pdf.png";
import print from "../images/print.png";


const Paymentcom = () => {
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

                <div className="paysec1">
                  <div>
                    <img src={payround} />
                    <div className="imgsitting">
                      <img src={payround1} />
                    </div>
                  </div>

                  <h3 style={{ marginTop: "60px", marginBottom: "20px" }}>
                    Payment Added To Billing
                  </h3>
                  <p>Ticket No: 072</p>

                  <div>


<div id="pdfprintbtn">

<div style={{display:"flex"}}>
    <button className="pdfbtn"><img src={pdf} style={{marginRight:"10px"}} /> 
 Downlooad As PDF</button>

</div>

<div style={{display:"flex"}}>
    <button className="printbtn"><img src={print} style={{marginRight:"10px"}}/> 
 Print</button>

</div>      
        
</div>

<p className="payp">Payment Processed Successfully, All Right reserved to Fabmedic</p>
 
                  </div>
                </div>
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

export default Paymentcom;
