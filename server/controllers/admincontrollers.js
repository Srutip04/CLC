const asyncHandler=require('express-async-handler')
const Admin=require('../model/adminmodel')
const generateToken=require('../config/token');
const Form = require('../model/formmodel');
const Student=require('../model/studentmodel')
const nodemailer=require('nodemailer')
const dotenv = require("dotenv");
const { authStudent } = require('./studentcontrollers');
dotenv.config()

let transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.USER,
    pass:process.env.PASS
  },
  tls:{
    rejectUnauthorized:false,
  }
})



const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Admin.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
     
      res.json({
        _id: user._id,
        firstname: user.firstname,
        email: user.email,
        token: generateToken(user._id),
      });
    
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });


const accessDashboard=asyncHandler(async(req,res)=>{
  try{

    const forms=await  Form.find().populate('sender','firstname lastname email')
    console.log(forms.content)
    res.json(forms)
  }
  catch(err){
    console.log(error)
    res.status(401);
    throw new Error("Not able to fetch forms")
  }
})

const decline=asyncHandler(async(req,res)=>{
  try{
    const {sender,createdAt,id}=req.body
    console.log(sender)
    const send=await Student.findOne({_id:sender._id})
    console.log(send.email)
    res.json("deleted succesfully")
    let mailOptions={
      from:process.env.USER,
      to:send.email,
      subject:"CLC request",
      text:"Declined"
    }
    transporter.sendMail(mailOptions,function(err,success){
      if(err){
        console.log(err)
      }else{
        console.log("Email sent success")
      }
    })
   // const form =await Form.find({createdAt,id}).deleteOne();
  }catch(err){
    console.log(err)
    res.status(401)
    throw new Error("")
  }
})

const accept=asyncHandler(async(req,res)=>{
  try{
    const {sender,createdAt , id}=req.body
    const send=await Student.findOne({_id:sender._id})
    console.log(send.email)
    let mailOptions={
      from:process.env.USER,
      to:send.email,
      subject:"CLC request",
      text:"Accepted"
    }
    transporter.sendMail(mailOptions,function(err,success){
      if(err){
        console.log(err)
      }else{
        console.log("Email sent success")
      }
    })
    //const form =await Form.find({createdAt,id}).deleteOne();
    res.json("sent email succesfully")
  }catch(err){
    console.log(err)
    res.status(401)
    throw new Error("")
  }
})



  module.exports={authAdmin,accessDashboard,decline,accept}