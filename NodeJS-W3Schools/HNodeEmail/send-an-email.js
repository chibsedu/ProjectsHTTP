var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chibsedu@gmail.com',
    pass: 'hykankncuhsiplxn'
  }
});

var mailOptions = {
  from: 'chibsedu@gmail.com',
  to: 'chibsali@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});