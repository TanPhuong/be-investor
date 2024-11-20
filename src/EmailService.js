const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();

// Sending email with own domain by mailtrap
const sendEmailService = async (email) => {
    let transporter = nodemailer.createTransport({
        host: 'live.smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: 'api',
            pass: process.env.APP_MAIL_TOKEN,
        }
    });

    let mailSending = await transporter.sendMail({
        from: 'hello@demomailtrap.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: "<b>123</b>"
    });

    return mailSending;
}

const sendEmailController = async (req, res) => {
    try {
        // const { email } = req.body
        // console.log(email)

        // if (email) {
        //     const response = await sendEmailService(process.env.APP_MAIL_USER);
        //     return res.json(response)
        // }

        const response = await sendEmailService(process.env.APP_MAIL_USER);
            return res.json(response)

        // return res.json({
        //     status: 'error',
        //     message: 'Something is wrong'
        // })


    } catch (error) {
        console.log(error)
        return res.json({
            status: 'err',
            message: error
        })
    }
}

// export default sendEmailService

module.exports = {
    sendEmailService,
    sendEmailController
}
