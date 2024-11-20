const nodemailer=  require('nodemailer')
const dotenv = require('dotenv');

const sendEmailService = async (email) => {

    let transporter = nodemailer.createTransport({
        host: 'live.smtp.mailtrap.io',
        port: 587,
        secure: false, 
        auth: {
            user: process.env.APP_MAIL_USER,
            pass: '',
        }
    });

    let mailSending = await transporter.sendMail({
        from: process.env.APP_MAIL_USER,
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: "<b>123</b>"
    });

    return mailSending;
}

export default sendEmailService
