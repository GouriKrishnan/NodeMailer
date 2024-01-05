
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: '******@gmail.com', // Replace with your Gmail address
    pass: '*******' // Replace with your Gmail password or an app-specific password
  }
});

// Email options
const mailOptions = {
  from: '*******@gmail.com', // Sender address
  to: '*****@example.com', // Receiver address
  subject: 'Hello from Nodemailer', // Subject line
  text: 'This is a test email sent from Node.js using Nodemailer.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
