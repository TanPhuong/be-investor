const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const { status } = require('express/lib/response');
dotenv.config();

// Sending email with own domain by mailtrap
const sendEmailService = async (info) => {
    let transporter = nodemailer.createTransport({
        // host: 'live.smtp.mailtrap.io',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.APP_MAIL_USER,
            pass: process.env.APP_PASSWORD,
        }
    });

    let mailSendingCEO = await transporter.sendMail({
        from: 'hello@demomailtrap.com',
        to: info.email,
        // to: 'tieutamdev@gmail.com',
        subject: 'Nhà đầu tư đã đăng ký tư vấn!',
        text: 'Nhà đầu tư đã đăng ký tư vấn!',
        html: `
            <h3>Hiện tại, quý ông/bà <b>${info.name}</b> đang cân nhắc đầu tư số tiền <b>${info.investment.toLocaleString()} đồng</b> vào công ty</h3>
            <p>Dưới đây là những thông tin đã cung cấp</p>
            <ul>
                <li>Họ và tên:  <b>${info.name}</b></li>
                <li>Số điện thoại:  ${info.phone}</li>
                <li>Email:  ${info.email}</li>
                <li>Thành phố:  ${info.provinces}</li>
                <li>Số tiền dự định đầu tư:  <b>${info.investment.toLocaleString()} đồng</b></li>
            </ul>
            <p>Vui lòng liên hệ với khách hàng trong thời gian sớm nhất để thảo luận và tư vấn chi tiết</p>
            <p>Cảm ơn anh/chị đã quan tâm</p>
            <p>Trân trọng,</p>
            <p>Công ty Cổ phần Thương mại và Dịch vụ Du Lịch Vietnam Tourist</p>
        `
    });



    let mailSending = await transporter.sendMail({
        from: 'hello@demomailtrap.com',
        to: info.email,
        subject: 'Kính gửi: Quý nhà đầu tư!',
        text: 'Kính gửi: Quý nhà đầu tư!',
        html: `
            <h3>Xin được gửi đến Quý nhà đầu tư lời chào trân trọng, lời chúc sức khoẻ và thành công!</h3>
            <h4>Chân thành cảm ơn ông/bà <b>${info.name}</b> vì đã quan tâm đến việc đầu tư vào công ty Vietnam Tourist. Chúng tôi nhận đã nhận được thông tin đăng ký của quý ông/bà và sẽ sớm liên hệ để tư vấn chi tiết.</h4>
            <p>Dưới đây là những thông tin đã cung cấp</p>
            <ul>
                <li>Họ và tên:  <b>${info.name}</b></li>
                <li>Số điện thoại:  ${info.phone}</li>
                <li>Email:  ${info.email}</li>
                <li>Thành phố:  ${info.provinces}</li>
                <li>Số tiền dự định đầu tư:  <b>${info.investment.toLocaleString()} đồng</b></li>
            </ul>
            <p>Bên phía Công ty chúng tôi sẽ liên hệ sớm nhất có thể để hỗ trợ tư vấn.</p>
            <p>Cảm ơn quý ông/bà đã quan tâm</p>
            <p>Trân trọng,</p>
            <p>Công ty Cổ phần Thương mại và Dịch vụ Du Lịch Vietnam Tourist</p>
            
        `
    });

    console.log(mailSendingCEO)

    return mailSending;
}

const sendEmailController = async (req, res) => {
    try {
        const info = req.body;
        console.log(req.body);

        if (info) {
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
