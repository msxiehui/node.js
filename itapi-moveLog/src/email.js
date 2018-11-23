var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: '406051152@qq.com',
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: 'bfarwjhfkqqjbhbg',
    }
});





function toEmail(text,bt,to) {
    if(to==null){
        to="msxiehui@163.com"
    }
    if(bt==null){
        bt="通知"
    }

    var mailOptions = {
        from: '"我的QQ" <406051152@qq.com>', // sender address
        to: to, // list of receivers
        subject: bt, // Subject line
        // 发送text或者html格式
        text: text // plain text body
        //html: '<b>Hello world?</b>' // html body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions,function (error,info) {
        if (error) {
            return console.log(error);
        }
        console.log("邮件发送成功");
        return "ok";
// Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    } );
}


exports.toEmail=toEmail;