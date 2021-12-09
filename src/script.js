const Course = require('./model/course');
const Student = require('./model/student');
const mongoose = require("mongoose");
const studentModel = require('./model/student');

const uri = "mongodb://localhost:27017/db";

// Creation d'un objet de cours 
let cours = {
    id : "crs004",
    label : "HTML",
    description : "Des cours avec des packages JSON",
    volume : 4
};
// fin Creation d'un objet de cours 

//Creation d'un objet etudiant 
// let etudiant = {
//     INE : "2021001DE",
//     FirstName : "Seynabou",
//     tel : 771011113,
//     LastName : "NIANG",
//     BornDay : "2001-12-31",
//     courses : ["61b219f55df3a01f75892300", "61b219d01a5efd1a2d9eb8ed"]
// };

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

const createStudentDeux = async () => {
    try {
        let student = new Student();
        student.INE = "2019044HT";
        student.FirstName = "Daouda";
        student.LastName = "Diouf";
        student.tel = 771021959;
        student.BornDay = "1994-01-01";
        student.courses = ["61b21740e041407e96ed5c10", "61b217a19ec1b7ebdb277fb0"];
        student.save();
    } catch (error) {
        console.log(error.message);
    }
}



connecter();
// createCourse();
createStudentDeux();




