const nodemailer = require('nodemailer');
const emailConfig = require('./emailConfig.js');

let transporter = nodemailer.createTransport({
    service: emailConfig.email.service,
    port: 465,
    secure: true, 
    auth: {
        user: emailConfig.email.user,
        pass: emailConfig.email.password
    }
});

let mail = {
	transporter:transporter,
	send(title, content){
      let mailOptions = {
		    from: emailConfig.email.user, // sender address
		    to: emailConfig.email.user, // list of receivers
		    subject: title, // Subject line
		    text: content, // plain text body
		    html: content // html body
        };
        
	 this.transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message sent: %s', info.messageId);
		});
	}
}
module.exports=mail