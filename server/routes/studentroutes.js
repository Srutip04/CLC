const express=require('express')
const {authStudent}=require('../controllers/studentcontrollers')
const { protectAdmin } = require('../middlewares/authadminmiddleware');

const router=express.Router()

router.route('/').post(authStudent);
//router.route('/').get(protectAdmin,accessDashboard);



module.exports=router