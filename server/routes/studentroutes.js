const express=require('express')
const {authStudent}=require('../controllers/studentcontrollers')

const { protectStudent } = require('../middlewares/authmiddleware');

const router=express.Router()

router.route('/').post(authStudent);
//router.route('/').get(protectAdmin,accessDashboard);
router.route('/').post(protectStudent,sendForm)



module.exports=router