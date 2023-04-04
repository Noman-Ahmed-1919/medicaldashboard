const mongoose =require('mongoose');

const patientSchema = new mongoose.Schema({
    email: String,
    phone: String,
    dob: String,
    gender: String,


})

module.exports= mongoose.model('patientslist',patientSchema);