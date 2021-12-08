const Course = require('./model/course');
const Student = require('./model/student');
const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/db";

// Creation d'un objet de cours 
let cours = {
    id : 1,
    label : "Seynabou's course",
    description : "Des cours avec des packages made in senegal",
    volume : 3
};
// fin Creation d'un objet de cours 

//Creation d'un objet etudiant 
let etudiant = {
    INE : "2021001DD",
    FirstName : "Seynabou",
    LastName : "NIANG",
    BornDay : "2001-12-31"
};
// fin Creation d'un objet de etudiant

const connecter = async () => {
    try {
        await mongoose.connect(uri);
        console.log("YOU ARE CONNECTED TO THE DATABASE");

    } catch (e) {
        console.error(e.message);
    }
}

const createCourse = async () => {
    try {
        const course = await Course.create(cours);
        console.log(course);
    } catch (err) {
        console.error(err.message);
    }   
}

const createStudent = async () => {
    try {
        const student = await Student.create(etudiant);
        console.log(student);
    } catch (errr) {
        console.error(errr.message);
    }   
}



connecter();
createCourse();
createStudent();




