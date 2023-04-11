const {User} = require('../../models');

const registerUser = async (req, res) => {
    const result = await User.create(req.body)
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = registerUser;