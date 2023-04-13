const { User } = require('../../models');
const {HttpError}= require('../../helpers');

const registerUser = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({ email });
    
      if (user) {
    throw HttpError(409, "Email in use");
  }
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = registerUser;