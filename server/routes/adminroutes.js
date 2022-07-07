const express=require('express')
const { protectAdmin } = require('../middlewares/authadminmiddleware');

const router=express.Router()

//router.route('/').get(protectAdmin,accessDashboard);



module.exports=router