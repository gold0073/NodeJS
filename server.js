const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
//console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true},(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("Connected to MongoDB");
    }
})
