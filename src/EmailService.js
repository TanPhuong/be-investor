const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const { status } = require('express/lib/response');
dotenv.config();

// Sending email with own domain by mailtrap
const sendEmailService = async (info) => {
    let transporter = nodemailer.createTransport({
        host: 'live.smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: 'api',
            pass: process.env.APP_MAIL_TOKEN,
        }
    });

    let mailSendingCEO = await transporter.sendMail({
        from: 'hello@demomailtrap.com',
        to: info.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: `
            <h1>Ông/bà <b>${info.name}</b> đang cân nhắc đầu tư số tiền ${info.investment}</h1> vào công ty
        `
    });

    let mailSending = await transporter.sendMail({
        from: 'hello@demomailtrap.com',
        to: info.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: `
            <h1>Chân thành cảm ơn ông/bà <b>${info.name}</b> vì đã cân nhắc đầu tư số tiền ${info.investment}</h1>
            
        `
    });

    return mailSending;
}

const sendEmailController = async (req, res) => {
    try {
        const info = req.body; 
        console.log(req.body);

        if(info) {
            const response = await sendEmailService(info);
            return res.json(response);
        }

        return res.json({
            status: 'err',
            message: 'Something is wrong'
        })


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
