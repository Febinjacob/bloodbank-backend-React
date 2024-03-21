//import db.js
const db= require('./db')

//user register
const register=(userid,username,password)=>{
    return db.users.findOne({userid}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"User Id Already Exists"
            }
        }
        else{
           const newUser= new db.users({userid,username,password})
           newUser.save()//to save new user
           return{
            statusCode:200,
            message:'Register Successfully'
           } 
        }
    })

}

//user login
const login=(userid,password)=>{
    return db.users.findOne({userid,password}).then((response)=>{
        console.log(response);
        if(response){
            return{
                statusCode:200,
                message:"Login Successful"
            }
        }
        else{
            return{
                statusCode:401,
                message:"Invalid Login"
            }
        }
    })
}

//doner booking
const donerBooking=(donerid,donername,date,phone,place,blood)=>{
    return db.doners.findOne({donerid}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Doner Id Already Exists"
            }
        }
        else{
            const newDoner =new db.doners({donerid,donername,date,phone,place,blood})
            newDoner.save()
            return{
                statusCode:200,
                message:'Booking Successfully'
            }
        }
    })
}

//get all doners
const allDoners=()=>{
    return db.doners.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                doner:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'No Data Found'
            }
        }
    })
}

//blood booking
const bloodBooking=(name,place,phone,blood)=>{
    return db.bookers.findOne({name}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Booking Already Taken"
            }
        }
        else{
            const newBooker=new db.bookers({name,place,phone,blood})
            newBooker.save()
            return{
                statusCode:200,
                message:"Booking Successfully"
            }
        }
    })
}

//admin register
const adminregister=(id,adminname,password)=>{
    return db.admins.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Id Already Exists"
            }
        }
        else{
           const newAdmin= new db.admins({id,adminname,password})
           newAdmin.save()//to save new user
           return{
            statusCode:200,
            message:'Register Successfully'
           } 
        }
    })

}

//admin login
const adminlogin=(id,password)=>{
    return db.admins.findOne({id,password}).then((response)=>{
        console.log(response);
        if(response){
            return{
                statusCode:200,
                message:"Login Successful"
            }
        }
        else{
            return{
                statusCode:401,
                message:"Invalid Login"
            }
        }
    })
}

//get all doners
const allDonersAdmin=()=>{
    return db.doners.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                doner:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'No Data Found'
            }
        }
    })
}


//get all doners
const allBloodAdmin=()=>{
    return db.bookers.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                doner:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'No Data Found'
            }
        }
    })
}

module.exports={
    register,
    login,
    donerBooking,
    allDoners,
    bloodBooking,
    adminregister,
    adminlogin,
    allDonersAdmin,
    allBloodAdmin
}