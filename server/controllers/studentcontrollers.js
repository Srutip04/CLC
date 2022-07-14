const asyncHandler = require("express-async-handler");
const Student = require("../model/studentmodel");
const generateToken = require("../config/token");
const Form = require("../model/formmodel");
//const moment = require('moment');

const authStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Student.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    var tt=generateToken(user._id)
    res.json({
      _id: user._id,
      firstname: user.firstname,
      email: user.email,
      token: tt,
    });
    console.log(tt)
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


const sendForm=asyncHandler(async(req,res)=>{
  const {email,date,branch,id,content}=req.body
  
  

  const user=await Student.findOne({email});
  if(user){
    const form=await Form.create({
      sender:user._id,
      branch:branch,
      id:id,
      content:content,
      createdAt:date,

    })
    res.json({
      _id:form._id,
      createdAt:form.createdAt,
      content:form.content

    })
  }else {
    res.status(401);
    throw new Error("details not filled");
  }
})


const getForm=asyncHandler(async(req,res)=>{
  try{
    const { sender } = req.body
    const forms=await  Form.find({sender}).populate('sender','firstname lastname email')
    console.log(forms.content)
    res.json(forms)
  }
  catch(err){
    console.log(error)
    res.status(401);
    throw new Error("Not able to fetch forms")
  }
})

module.exports = { authStudent ,sendForm,getForm};
