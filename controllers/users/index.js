const { ctrlWrapper } = require('../../utils');

const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const updateSubUser = require('./updateSubUser');




module.exports = {
    registerUser: ctrlWrapper(registerUser),
    loginUser: ctrlWrapper(loginUser),
    logoutUser: ctrlWrapper(logoutUser),
    getCurrentUser: ctrlWrapper(getCurrentUser),
    updateSubUser: ctrlWrapper(updateSubUser),

}