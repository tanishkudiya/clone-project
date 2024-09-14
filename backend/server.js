const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const collection = require("./mongoose");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended : true}));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.listen(8081,()=>{
    console.log("Listening");
})
app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?"
})

app.post('/signup',(req,res)=>{
    const sql = "SELECT * FROM `login` WHERE name=? email=? AND password=?";

    // const values = [
    //     req.body.name,
    //     req.body.email,
    //     req.body.password
    // ]

    db.query(sql,[req.body.name,req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Sign up failed");
        }
        return res.json(data);
    })
})


// app.post("/signup",async(req,res)=>{
//     const {name,email,password} = req.body;

//     const data = {
//         name:name,
//         eamil:email,
//         password:password
//     }

//     try{
//         const check = await collection.findOne({email:email});

//         if(check){
//             res.json("exist");
//         }
//         else{
//             res.json("notexist");
//             await collection.insertMany([data]);
//         }
//     }
//     catch(e){
//         res.json("notexist");
//     }
// })