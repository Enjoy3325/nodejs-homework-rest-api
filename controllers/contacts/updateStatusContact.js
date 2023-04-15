const { contact } = require('../../models');
const { HttpError } = require('../../helpers');

const updateStatusContact = async (req, res) => {
    if (!Object.keys(req.body).length) {
        throw HttpError(400, "Missing field favorite")
    }
    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
    if (!result) {
        throw HttpError(404, `${contactId}"Not found"`);
    }
    res.json(result);
};

module.exports = updateStatusContact;