const express=require('express');
const { authAdmin, accessDashboard, decline, accept } = require('../controllers/admincontrollers');
const { protectAdmin } = require('../middlewares/authadminmiddleware');

const router=express.Router()

router.route('/').post(authAdmin)
router.route('/Dashboard').get(protectAdmin,accessDashboard);
router.route('/Dashboard/form-decline').post(protectAdmin,decline)
router.route('/Dashboard/form-accept').post(protectAdmin,accept)



module.exports=router