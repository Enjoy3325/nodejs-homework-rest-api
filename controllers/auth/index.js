const { ctrlWrapper } = require('../../utils');
const registerUser = require('./registerUser');

module.exports = {
    registerUser: ctrlWrapper(registerUser),
}