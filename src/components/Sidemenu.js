import React from "react";
import { Routes, Route, NavLink, Redirect, Link } from "react-router-dom";

import dash from "../images/dash.png";
import recp from "../images/recp.png";
import appointment from "../images/appointment.png";
import patient from "../images/patient.png";
import media from "../images/media cart.png";

import fin from "../images/fin.png";
import report from "../images/report.png";
import management from "../images/management.png";
import sitting from "../images/sitting.png";
import logout from "../images/logout.png";
import drop from "../images/dropdown.png";


const Sidemenu = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="sidemenumain">
          <div style={{ display: "flex" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={dash}
            />
            <p
              style={{
                paddingTop: "15px",
                paddingLeft: "8px",
                color: "rgba(85, 26, 139)",
              }}
            >
              Dashboard{" "}
            </p>
          </div>

          <div style={{ display: "flex", marginTop: "05px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={recp}
            />
            <NavLink
              to="/scheduleapp"
              style={{
                paddingTop: "15px",
                paddingLeft: "8px",
                color: "rgba(85, 26, 139)",
              }}
            >
              Reception
            </NavLink>
          </div>

          <div style={{ display: "flex" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={appointment}
            />
            <ul style={{ paddingLeft: "8px" }}>
              <li>
                <div style={{ paddingTop: "15px", display: "flex" }}>
                  <NavLink
                    to="/mainpage"
                    style={{
                      textDecoration: "none",
                      color: "rgba(85, 26, 139)",
                    }}
                  >
                    Appointments
                    <img
                      src={drop}
                      style={{
                        height: "05px",
                        paddingTop: "0px",
                        paddingLeft: "35px",
                      }}
                    />
                  </NavLink>
                </div>

                <ul
                  className="dropdown"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                >
                  <li>
                    <NavLink to="/bookappointment">
                      Schedule Appointment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/calender">Calendar</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "25px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={patient}
            />

            <ul style={{ paddingLeft: "8px" }}>
              <li>
                <div style={{ paddingTop: "15px", display: "flex" }}>
                  <NavLink
                    to="/patient"
                    style={{
                      textDecoration: "none",
                      color: "rgba(85, 26, 139)",
                    }}
                  >
                    patient
                    <img
                      src={drop}
                      style={{
                        height: "05px",
                        paddingTop: "0px",
                        paddingLeft: "80px",
                      }}
                    />
                  </NavLink>
                </div>

                <ul
                  className="dropdown"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                >
                  <li>
                    <NavLink to="/schuleapptime">Register Patient</NavLink>
                  </li>
                  <li>
                    <a href="#">Search Patient</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={media}
            />
            <NavLink
              to="/invoice"
              style={{
                paddingTop: "15px",
                paddingLeft: "8px",
                color: "rgba(85, 26, 139)",
              }}
            >
              Media Cart
            </NavLink>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={fin}
            />
            <NavLink
              to="/paymentcomplete"
              style={{
                paddingTop: "15px",
                paddingLeft: "8px",
                color: "rgba(85, 26, 139)",
              }}
            >
              Financial
            </NavLink>
          </div>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={report}
            />

            <ul style={{ paddingLeft: "8px" }}>
              <li>
                <div style={{ paddingTop: "15px", display: "flex" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "rgba(85, 26, 139)",
                    }}
                  >
                    Reports
                    <img
                      src={drop}
                      style={{
                        height: "05px",
                        paddingTop: "0px",
                        paddingLeft: "80px",
                      }}
                    />
                  </a>
                </div>
                <ul
                  className="dropdown"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                >
                  <li>
                    <a href="#">Insights</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "25px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={management}
            />
            <ul style={{ paddingLeft: "8px" }}>
              <li>
                <div style={{ paddingTop: "15px", display: "flex" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "rgba(85, 26, 139)",
                    }}
                  >
                    Management
                    <img
                      src={drop}
                      style={{
                        height: "05px",
                        paddingTop: "0px",
                        paddingLeft: "40px",
                      }}
                    />
                  </a>
                </div>
                <ul
                  className="dropdown"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                >
                  <li>
                    <a href="#">Staff List</a>
                  </li>
                  <li>
                    <a href="#">Service List</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "25px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "18px" }}
              src={sitting}
            />

            <ul style={{ paddingLeft: "8px" }}>
              <li>
                <div style={{ paddingTop: "15px", display: "flex" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "rgba(85, 26, 139)",
                    }}
                  >
                    Sitting
                    <img
                      src={drop}
                      style={{
                        height: "05px",
                        paddingTop: "0px",
                        paddingLeft: "85px",
                      }}
                    />
                  </a>
                </div>
                <ul
                  className="dropdown"
                  style={{ paddingTop: "10px", paddingLeft: "10px" }}
                >
                  <li>
                    <a href="#">Organization</a>
                  </li>
                  <li>
                    <a href="#">Account</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <img
              style={{ height: "20px", paddingLeft: "6px", marginTop: "22px" }}
              src={logout}
            />
            <p style={{ paddingTop: "15px", paddingLeft: "8px", color: "red" }}>
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
