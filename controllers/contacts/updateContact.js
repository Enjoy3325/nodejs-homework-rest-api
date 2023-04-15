const { contact }  = require('../../models');
const { HttpError } = require('../../helpers');

const updateContact = async (req, res) => {
  
    const { contactId } = req.params;
    const result = await contact.findByIdAndUpdate(contactId, req.body, { new: true })

    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found!`);
    }
    res.json(result)
};


module.exports = updateContact;