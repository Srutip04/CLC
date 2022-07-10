const express=require('express');
const { authAdmin } = require('../controllers/admincontrollers');
const { protectAdmin } = require('../middlewares/authadminmiddleware');

const router=express.Router()

router.route('/').post(authAdmin)
//router.route('/Dashboard').get(protectAdmin,accessDashboard);



module.exports=router