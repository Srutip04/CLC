const asyncHandler=require("express-async-handler")
const Student=require('../model/studentmodel')
const Teacher=require('../model/adminmodel')
const generateToken=require('../config/token')


const RegisterUser = asyncHandler(async (req, res) => {
    const { firstname,lastname,email,password,role } = req.body;
  
    if (!firstname || !lastname || !email || !password || !role) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }
  if(role=='Student'){
      const userExists = await Student.findOne({ email });
      if (userExists) {
        res.status(400);
       throw new Error("User already exists");
    }
  
    const user = await Student.create({
      firstname,
      lastname,
      email,
      password,
    });
    if (user) {
        res.status(201).json({
          _id: user._id,
          firstname: user.firstname,
          lastname:user.lastname,
          email: user.email,
          token: generateToken(user._id),
        });
        // res.redirect('/')
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    
  

  }

  if(role=='Teacher'){
    const userExists = await Teacher.findOne({ email });
    if (userExists) {
      res.status(400);
     throw new Error("User already exists");
  }

  const user = await Teacher.create({
    firstname,
    lastname,
    email,
    password,
  });
  if (user) {
      res.status(201).json({
        _id: user._id,
        firstname: user.firstname,
        lastname:user.lastname,
        email: user.email,
        token: generateToken(user._id),
      });
      // res.redirect('/')
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  


}

})
  
       
  
  

module.exports={RegisterUser}
  
  