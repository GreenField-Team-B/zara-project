const User = require("../model/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv').config()
//sign up 
module.exports.signUp =  async (req, res) => {
  try {
    const  { username, email, phone_number, password, role } = req.body;
    const find = await User.findOne({
      where: { email: email},
    });
    if (find) {
      return res.status(400).send("Email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      username: username,
      email: email,
      phone_number: phone_number,
      password: hashPassword,
      role: role
    });
    return res.status(200).send('Registration successful');
    
  } catch (error) {
    return res.status(500).send("Server error");
  }
};
// login using the email
module.exports.loginByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } })
    
    if (!user) {
        return res.status(404).json("User does not exist" );
    }
    const passwordValid = await  bcrypt.compare(password, user.password)
    if (!passwordValid) {
      return res.status(400).json( "Password Incorrect" );
    }
  
  const token =  jwt.sign({id : user.id}, dotenv.parsed.SECRET_KEY)

   res.status(200).send(token);
}
 catch (error) {
  
    return res.status(500).send("Sign in error");
  }
}
// login using the phone_Number
module.exports.loginByPhoneNumber = async (req, res) => {
  try {
    const { phone_number, password } = req.body;
    const user = await User.findOne({ where: { phone_number: phone_number } })

    if (!user) {
        return res.status(404).json("User does not exist" );
    }
    const passwordValid = await  bcrypt.compare(password, user.password)
    if (!passwordValid) {
    return res.status(400).json( "Password Incorrect" );
  }
  
  const token = jwt.sign({id : user.id}, dotenv.parsed.SECRET_KEY)

   res.status(200).send(token);
}
 catch (error) {
        return res.status(500).send("Sign in error");
  }
}
