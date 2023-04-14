const bcrypt = require('bcrypt')
const { User } = require('../models');

const hashPassword = async ({ password }) => {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
}

const comparePassword = async ({ password }) => {
    const result = await User.create({ ...req.body, password: hashPassword() })
    const compareResult = await bcrypt.compare(password, result)
    return compareResult;
}

module.exports = {
    hashPassword,
    comparePassword,
};