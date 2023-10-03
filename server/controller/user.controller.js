const User = require("../model/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports.signUp = async (req, res) => {
  try {
    const  { username, email, phone_number, password, role } = req.body;
    const find = await User.findOne({
      where: { email:req.body.email},
    });
    if (find) {
      return res.status(400).send("Email already exist");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 8);
    const newUser = User.create({
      username: req.body.username,
      email: req.body.email,
      phone_number: req.body.phone_number,
      password: hashPassword,
      role: req.body.role,
    });
    return res.status(200).send('Registration successful');
    
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

module.exports.logIn = async (req, res) => {
  try {
    const { email,phone_number, password } = req.body;
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        return res.status(404).json("User does not exist" );
    }
    const passwordValid =await  bcrypt.compare(password,user.password)
    if (!passwordValid) {
    return res.status(400).json( "Password Incorrect" );
  }
  
  const token = jwt.sign({id : user.id},'hhhhh')

   res.status(200).send({
    id: user.id,
    email: user.email,
    phone_number: user.phone_number,
    accessToken: token,
});
}
 catch (error) {
    console.log(error);
    return res.status(500).send("Sign in error");
  }
}
