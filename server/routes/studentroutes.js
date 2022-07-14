const express=require('express')
const {authStudent, sendForm,getForm}=require('../controllers/studentcontrollers')

const { protectStudent } = require('../middlewares/authmiddleware');

const router=express.Router()

router.route('/').post(authStudent);
//router.route('/').get(protectAdmin,accessDashboard);
router.route('/Dashboard').post(protectStudent,sendForm)
router.route('/Dashboard').get(protectStudent,getForm)



module.exports=router