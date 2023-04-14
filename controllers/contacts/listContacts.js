const { Contact } = require('../../models/contact/contact');

const listContacts = async (req, res) => {
  console.log(req.user);
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  limit = +limit > 20 ? 20 : +limit; 
  const skip = +page > 1 ? +limit * (+page - 1) : 0;
  const result = await Contact.find({ owner })
    .populate("owner", "name email")
    .skip(skip )
  .limit(limit)
  
  res.json({result,  page: +page, limit })
}

module.exports = listContacts;