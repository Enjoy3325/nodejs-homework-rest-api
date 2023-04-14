// const {hashPassword} = require('../../hashPassword');
const { User } = require('../../models');
const {HttpError}= require('../../helpers');

const registerUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
    
  if (user) {
    throw HttpError(409, "Email in use");
  }
  // hashPassword(password)
  
  res.status(200).json({
    user: {
      email: user.email,
    },
        
  });
};

module.exports = registerUser;