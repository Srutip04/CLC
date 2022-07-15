const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Student = require("../model/studentmodel");


const protectStudent =asyncHandler(async(req,res,next)=>{
    let token ;
    { 
        //console.log(req.user)
        //console.log(req.headers.authorization)
    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer"))

        try{
            token=req.headers.authorization.split(" ")[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await Student.findById(decoded.id).select("-password")
            next();
        }catch(err){
            res.status(401);
            throw new Error("Not authorised,no token");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
      }
});

module.exports={protectStudent}