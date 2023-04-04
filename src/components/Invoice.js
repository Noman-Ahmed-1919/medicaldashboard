import React from "react";
import pdf from "../images/pdf.png";
import order from "../images/order.png";

const Invoice = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="invoicesec1">
              <div id="order">
                <h6 style={{ paddingTop: "5px" }}>Order #AD202294</h6>

                <div style={{ display: "flex" }}>
                  <button className="pdfbtn1">
                    <img src={pdf} style={{ marginRight: "10px" }} />
                    Downlooad
                  </button>
                </div>
              </div>
            </div>

            <div id="invoicesec2">
              <div className="invoiceh6">
                <h4>Invoice</h4>
                <div>
                  <h6>Wannsee Zielendorf.</h6>
                  <p>Sparkasee 12109</p>
                </div>
              </div>

              <div id="invoicesec3">

              <div className="invoiceh6">
               <div>
               <h5>Invoice To:</h5>
               <h6>Sofia Mark</h6>
                <p>Charlottenburg,<br></br> Street no: 56 10553</p>
               
               </div>
                
                <div>
                  <h5>Invoice No: 14</h5>
                  <p>Order No: #AD202294</p>
                  <p>Order Date: 2018-09-25</p>
                  <p>Payment Due: Upon receipt</p>
                  <p>Amount Due: $19899.0</p>



                </div>
              </div>
<img src={order} style={{width:"100%"}}/>
              </div>

<p className="note">Note: We really appreciate your business and if there's anything else we can do, please let us know!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
