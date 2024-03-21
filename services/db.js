//1 import mongoose
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blood')

//craete an model 
const users = mongoose.model('users',{
    userid:Number,
    username:String,
    password:String,
})


//doner booking
const doners=mongoose.model('doners',{
    donerid:Number,
    donername:String,
    date:String,
    phone:Number,
    place:String,
    blood:String,

})

//blood booking
const bookers=mongoose.model('bookers',{
    name:String,
    place:String,
    phone:Number,
    blood:String
})

//admin register
const admins=mongoose.model('admins',{
    id:Number,
    adminname:String,
    password:Number
})


//export model
module.exports = {
    users,
    doners,
    bookers,
    admins
}