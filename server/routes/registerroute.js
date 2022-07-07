const express=require('express')
const router=express.Router()
const {RegisterUser}=require("../controllers/registercontrollers")

router.route('/').post(RegisterUser)



module.exports=router