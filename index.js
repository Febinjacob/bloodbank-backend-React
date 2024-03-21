//1 import express
const express = require('express');

//2 import cors
const cors= require('cors');

//import logic
const logic= require('./services/logic')

//3 create a server application using express
const server=express()


//4 use cors
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('listening on the port 8000');
})


//user register api
server.post('/userRegister',(req,res)=>{
    logic.register(req.body.userid,req.body.username,req.body.password).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//user login api
server.post('/userLogin',(req,res)=>{
    console.log('Inside login API call');
    console.log(req.body);
    logic.login(req.body.userid,req.body.password).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


//doner booking
server.post('/donerBooking',(req,res)=>{
    logic.donerBooking(req.body.donerid,req.body.donername,req.body.date,req.body.phone,req.body.place,req.body.blood).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//get all doners api
server.get('/getDoners',(req,res)=>{
    logic.allDoners().then((response)=>{
        res.status(express.response.statusCode).json(response)
    })
})


//blood booking
server.post('/bloodBooking',(req,res)=>{
    logic.bloodBooking(req.body.name,req.body.place,req.body.phone,req.body.blood).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})



//admin register api
server.post('/adminRegister',(req,res)=>{
    logic.adminregister(req.body.id,req.body.adminname,req.body.password).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//admin login api
server.post('/adminLogin',(req,res)=>{
    console.log('Inside login API call');
    console.log(req.body);
    logic.adminlogin(req.body.id,req.body.password).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


//get all doners Admin api
server.get('/getDonersAdmin',(req,res)=>{
    logic.allDonersAdmin().then((response)=>{
        res.status(express.response.statusCode).json(response)
    })
})

//get all doners Admin api
server.get('/getBloodAdmin',(req,res)=>{
    logic.allBloodAdmin().then((response)=>{
        res.status(express.response.statusCode).json(response)
    })
})