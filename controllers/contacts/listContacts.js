const { Contact } = require('../../models');
const {HttpError} = require('../../helpers');

const listContacts = async (req, res) => {
  const result = await Contact.find({})
  res.json(result)
}

// const listContacts = async (req, res) => {
//   console.log(req.user);
//   const { _id: owner } = req.user;
//   const { page = 1, limit = 20, favorite } = req.query;
//   const skip = (page - 1) * limit;
//   try {
//     if (favorite) {
//       console.log(Contact);
//       const result = await Contact.find(
//         { owner, favorite },
//         {
//           skip,
//           limit,
//         }
//         ).populate("owner", "email");
//         res.json(result);
       
//     }
//     console.log(result);
//     const result = await Contact.find({ owner }, {
//       skip,
//       limit,
//     }).populate("owner", "email");
//     res.json(result);
//   } catch (error) {
//     throw HttpError(404, `Not found`);
//   }
// };

module.exports = listContacts;