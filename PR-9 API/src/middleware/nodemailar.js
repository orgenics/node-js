const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 579,
    secure: false,
    auth: {
        user: 'rajsurani039@gmail.com',
        pass: 'hywxxcuthovuihkk '
    }
})

const sendEmail = async (message) => {
    let res = await transporter.sendMail(message)
}

module.exports = sendEmail;