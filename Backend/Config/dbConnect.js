const mongoose = require("mongoose");

const dbConnect= async()=>{

    try{
       await mongoose.connect("mongodb://localhost:27017/mentalhealth");
       console.log("db connected successfully");
    }
    catch(error){
        console.log(error.message);
        console.log("error occurs while connecting");
    }
    
}

module.exports = dbConnect ;