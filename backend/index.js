const express = require("express");
require("./db/config");
const Patientregister = require("./db/Patientregister");

const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

app.post("/patient-list", async (req, res) => {
  let patient = new Patientregister(req.body);
  let result = await patient.save();
  res.send({result:"Successfully added"});
});


app.get("/patients", async (req, res) => {
  let patient = await Patientregister.find();
  console.log(patient);
  if (patient.length > 0) {
    res.send(patient);
  } else {
    res.send({ result: "No Patient Record Found" });
  }
});



app.listen(5000, () => {
  console.log("Running port num at 5000");
});
