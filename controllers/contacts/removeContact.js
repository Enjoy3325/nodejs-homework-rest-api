const { contact } = require('../../models');
const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await contact.findByIdAndRemove(contactId)
    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found!`);
    }
    res.status(200).json({ message: "Contact deleted" })
};

module.exports = removeContact;