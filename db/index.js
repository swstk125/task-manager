const mongoose = require("mongoose");

module.exports.initializeDB = async () => {
    await mongoose.connect("mongodb://localhost/task_manager").then(()=>{
        console.log('connected to mongodb');
    }).catch((error)=>{
        console.log('erorr while connecting to mongodb', error);
    });
}