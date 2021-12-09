const mongoose = require("mongoose");

const schema = mongoose.Schema;
const courseSchema = new schema({
    id : {
        type : String,
        unique : true
    },
    label: {
        type : String,
        required : true,
        // default : "Francais" choisir entre lui et require
        minlength : 4, //varchar(54) <==> msql
        maxlength : 20
    },
    description : {
        type : String,
        default : "Cours par defaut"
    },
    volume : {
        type : Number,
        min : 1 // pour le type number on utilise min ou max au lieu du minlength de string
    },
    startDate : {
        type : Date,
        default : "2021-10-18" 
        //default : Date.now ==> Donne la donne qu moment present de l'utilisation 
    }
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;
