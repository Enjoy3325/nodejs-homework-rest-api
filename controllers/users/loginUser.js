
const {comparePassword} = require('../../hashPassword');
const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
        throw HttpError(401, "Email or password is wrong");
    }
    comparePassword(password)
}
module.exports = loginUser;