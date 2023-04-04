import React, {useEffect, useState} from "react";

import patientprofile from "../images/patproimg.png";
import axios from "axios";


const Bookappoint = () => {


  useEffect(() =>{
    getpatientdatafrombackend();
  }, [])


  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  

  const [patients, setPatients] = useState([]);


const addpatientdata =()=>{

  console.warn(email, phone, dob, gender);

  axios.post("http://localhost:5000/patient-list", {email, phone, dob, gender})
  .then((res) => {
      alert(res.data.result)

  }).catch((error) => {
      console.log(error);
  })

}



const getpatientdatafrombackend = () =>{  // this route is used to get the data from backend and render it to table html.
  axios.get("http://localhost:5000/patients")
  .then((res) => {
      // console.log(res);

      let things = res.data;
      console.log(things);

      setPatients(things);
      // console.warn("products",products)

  }).catch((error) => {
      console.log(error);
  })

}


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
              </div>

              <p className="search">
                Search Patients (Use Name, Phone Number, Hospital Number)
              </p>

              <div>
                <input className="searchinp1" placeholder="Seach" />
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
                      {
                      patients.length>0 ? patients.map((item, index)=>

                        <tr>


                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>Aga Khan</td>
                          <td>{item.dob}</td>
                          <td>{item.gender}</td>
                          <td>22</td>
                        </tr>
                        ):<h1>No Result Found</h1>

}
                    

                   

                      

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

          <div className="col-md-4" id="profilepatient">
            <h5 style={{ paddingTop: "10px" }}>Patient Profile</h5>

            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <img src={patientprofile} />

              <p>Sofia</p>
            </div>

            <h6 className="emailh6">Name:</h6>

            <input className="emailinput" placeholder="Sofia" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <h6 className="phoneh6">Phone Number</h6>

            <input className="phoneinput" placeholder="+01788107709" value={phone} onChange={(e)=>setPhone(e.target.value)} />

            <div style={{ display: "flex" }}>
              <div>
                <h6 className="dobh6">D.O.B</h6>

                <input className="dobinp" placeholder="26/6/1990" value={dob} onChange={(e)=>setDob(e.target.value)} />
              </div>

              <div style={{ marginLeft: "10px" }}>
                <h6 className="genderh6">Gender</h6>

                <input className="gender" placeholder="Female" value={gender} onChange={(e)=>setGender(e.target.value)} />
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
            
              <button className="editbtn" onClick={addpatientdata}>Edit Profile</button>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookappoint;
