const mongoose = require("mongoose");

const schema = mongoose.Schema;
const studentSchema = new schema({
    INE : {
        type : String,
        unique : true
    },
    FirstName : {
        type : String,
        required : true,
        // default : "Francais" choisir entre lui et require
        minlength : 4, //varchar(54) <==> msql
        maxlength : 20
    },
    LastName : {
        type : String,
        required : true,
        // default : "Francais" choisir entre lui et require
        minlength : 4, //varchar(54) <==> msql
        maxlength : 20
    },
    tel : {
        type : Number,
        unique : true 
    },
    promotion : {
        type : String,
        default : "2021/2022" 
    },
    BornDay : {
        type : Date,
        default : "1990-01-01" 
    },
    courses :[
        {
            type: mongoose.Types.ObjectId, 
            ref: 'Course'
        }
    ]
});

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;
