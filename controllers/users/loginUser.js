
// const {comparePassword} = require('../../hashPassword');
const { User:user } = require('../../models');
const { HttpError } = require('../../helpers');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userFind = await user.findOne({ email });
    
    if (!userFind) {
        throw HttpError(401, "Email or password is wrong");
    }
    // comparePassword(password)
}
module.exports = loginUser;