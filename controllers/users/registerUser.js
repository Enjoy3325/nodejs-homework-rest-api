// const {hashPassword} = require('../../hashPassword');
const user  = require('../../models');
const {HttpError}= require('../../helpers');

const registerUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const userFind = await user.user.user.User.findOne({ email });
    
  if (userFind) {
    throw HttpError(409, "Email in use");
  }
  // hashPassword(password)
  
  res.status(200).json({
    userFind: {
      email: userFind.email,
    },
        
  });
};

module.exports = registerUser;