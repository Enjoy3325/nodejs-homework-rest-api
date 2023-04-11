const { listContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
    updateStatusContact } = require("./contacts")
const {registerUser, } = require('./auth');

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    updateStatusContact,
    removeContact,
    registerUser
}