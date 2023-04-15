const  contact = require('../../models');

const addContact = async (req, res) => {
    // const { _id: owner } = req.user;
    const result = await contact.contact.Contact.create(req.body);
    res.status(201).json(result);
};

module.exports = addContact;