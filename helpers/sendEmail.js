const nodemailer = require('nodemailer');

require('dotenv').config();
const { META_PASSWORD, EMAIL_FROM } = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_FROM,
        pass: META_PASSWORD,
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async(data)=> {
    const email = { ...data, EMAIL_FROM }
    await transporter.sendMail(email)
    console.log(data);
    console.log(email);
    return true;
}

module.exports = sendEmail;