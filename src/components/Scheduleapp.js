import React from "react";

const Scheduleapp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="rightmaindiv">
              <div className="scheduleheader">
                <div className="firstdiv">
                  <h5>Schedule Appointment</h5>
                </div>
              </div>

              <p className="search">
                Search Patients (Use Name, Phone Number, Hospital Number)
              </p>

              <div>
                <input className="searchinp" placeholder="Seach" />
                <button className="searchbtn">search</button>
              </div>

              <div className="table">
                <div class="table-responsive">
                  <table class="table">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          {/* <th scope="col">#</th> */}
                          <th scope="col">Patient Name</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Hospital Number</th>
                          <th scope="col">Date of Birth</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <th scope="row">1</th> */}
                          <td>Mark</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          {/* <th scope="row">2</th> */}
                          <td>Sahil</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>

                        <tr>
                          {/* <th scope="row">3</th> */}
                          <td>Sofia</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>

                        <tr>
                          {/* <th scope="row">3</th> */}
                          <td>Ahmed</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>

                        <tr>
                          {/* <th scope="row">3</th> */}
                          <td>Amar</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>

                        <tr>
                          {/* <th scope="row">3</th> */}
                          <td>Jorawar</td>
                          <td>+491788107709</td>
                          <td>Aga Khan</td>
                          <td>26.6.1998</td>
                          <td>Female</td>
                          <td>22</td>
                        </tr>
                      </tbody>
                    </table>
                  </table>
                </div>
              </div>
            </div>


            <div className="btnssec">
              <button className="backbtn1">Register New Page</button>
              <button className="nextbtn1">Select</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Scheduleapp;
