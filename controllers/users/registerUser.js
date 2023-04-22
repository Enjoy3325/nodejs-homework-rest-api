const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is use")
  }

  const hashPassword = await bcrypt.hash(password, 10);
const avatarURL = gravatar.url(email)
  const result = await User.create({ ...req.body, password: hashPassword, avatarURL });
  res.status(201).json({
    email: result.email,
    password: result.password,
  });
};

module.exports = registerUser;