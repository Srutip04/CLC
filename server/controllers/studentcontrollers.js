const asyncHandler = require("express-async-handler");
const Student = require("../model/studentmodel");
const generateToken = require("../config/token");
const Form = require("../model/formmodel");
const moment = require('moment');

const authStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Student.findOne({ email });

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


const sendForm=asyncHandler(async(req,res)=>{
  const {email,date,branch,id,content}=req.body
  let v=moment(date)
  

  const user=await Student.findOne({email});
  if(user){
    const form=await Form.create({
      sender:user._id,
      branch:branch,
      id:id,
      content:content,
      createdAt:v,

    })
  }
})

module.exports = { authStudent ,sendForm};
