const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/react-login-tut')
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection",newSchema);
module.exports = collection;