const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const resendVerifyEmail = async (req,res) => {
    const { email } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
       throw HttpError(404, "User not found").json({code:404, message:"User not found"})
    }
    if (user.verify) {
        throw HttpError(400, "Verification has already been passed").json({code:400, message:"Verification has already been passed"})
    }

    const verifycateEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_black" href="${BASE_URL}/api/user/verifycate${user.verificationToken}" >Click verify email</a>`
    }
    await sendEmail(verifycateEmail)
    res.json({code:200, message: "Verification email sent"})
}

module.exports = resendVerifyEmail;