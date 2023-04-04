import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const locales = {
    "en-US": require("date-fns/locale/en-US")

}

const localizer = dateFnsLocalizer({
    format,
    parse, 
    startOfWeek,
    getDay,
    locales
})


const events =[
    {
        title: "O.P.D Day",
        start:true,
        start: new Date(2023,3,3),
        end: new Date(2023,3,3)
    },
    {
        title: "O.P.D Day",
        start:true,
        start: new Date(2023,3,5),
        end: new Date(2023,3,5)
    },
    {
        title: "O.P.D Day",
        start:true,
        start: new Date(2023,3,7),
        end: new Date(2023,3,7)
    },
    {
        title: "O.T Day",
        start:true,
        start: new Date(2023,3,15),
        end: new Date(2023,3,18)
    },
    {
        title: "Conference",
        start:true,
        start: new Date(2023,3,22),
        end: new Date(2023,3,22)
    },
]


const Calender = () =>{

const [newEvent, setNewEvent] = useState({ title: "", start:"", end:""})

const [allEvents, setallEvents] = useState(events)

console.log();


const handleAddEvent = (e) => {
    setallEvents([...allEvents, newEvent])

}

    return(
    <>
    
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">


<div>
  
{/* <input type="text" placeholder="Add Schedule"  style={{width:"20%"}}
    defaultValue={newEvent.title} 
    onClick={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
    />

    <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}} selected={newEvent.start}
    onChange={(start) => setNewEvent({...newEvent, start})} />


<DatePicker placeholderText="End Date" selected={newEvent.end}
    onChange={(end) => setNewEvent({...newEvent, end})} ></DatePicker> */}

<button className="add-schedulebtn" style={{marginTop:"20px"}} onClick={handleAddEvent}>Add Schedule</button>



</div>



            <Calendar
localizer={localizer}
events={allEvents}
startAccessor="start"
endAccessor="end"
style={{height: 500, marginTop:"30px"}}
/>


            </div>

        </div>

    </div>

    
    
    </>
    
    )
}

export default Calender;