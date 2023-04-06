import React from "react";
import { Calendar } from "react-big-calendar";
import { Routes, Route, NavLink, Redirect, Switch } from "react-router-dom";
import Bookappoint from "./Bookappoint";
import Calender from "./Calender";
import Invoice from "./Invoice";
import Mainpage from "./Mainpage";
import Patient from "./Patient";
import Paymentcom from "./Paymentcom";
import Paymentcomplete from "./Paymentcomplete";
import Scheduleapp from "./Scheduleapp";
import Scheduleapptime from "./Scheduleapptime";

const Approuter = () => {
  return (
    <>


      <Route exact path='/'>
        <Redirect  to='/mainpage' />
        </Route>

      <Route exact path="/mainpage"  component={Mainpage} />

      <Route  path='/scheduleapp' component={Scheduleapp} />
      <Route  path="/calender" component={Calender} />
      <Route  path="/patient" component={Patient} />
      <Route  path="/bookappointment" component={Bookappoint} />
      <Route exact path="/schuleapptime" component={Scheduleapptime} />
      <Route exact path="/paymentcom" component={Paymentcom} />
      <Route exact path="/paymentcomplete" component={Paymentcomplete} />
      <Route exact path="/invoice" component={Invoice} />






    </>
  );
};

export default Approuter;
