const asyncHandler=require('express-async-handler')
const Admin=require('../model/adminmodel')
const generateToken=require('../config/token')


const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Admin.findOne({ email });
  
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


  module.exports={authAdmin}