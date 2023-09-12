const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT||3001;
const corsOptions = {
   origin: 'https://portfolio-fm94.onrender.com',

  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
    
};
app.use(cors(corsOptions));
// Middleware for parsing JSON data
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, subject, notification,description } = req.body;

  // Configure your email transport
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'swaroopkvm10@gmail.com', 
      pass: 'nrys aypy dqah efwk',       
        },
    
  });
    
    const emailbody =`
    Hi Swaroop,
    I am ${name}. I have seen your Portfolio website.
    ${description}.
    
    Notification needed:${notification}
    Replyto : ${email}.
    Thanks & Regards,
    ${name},
    
    `;
    // Email data
    const mailOptions = {
    from: email, 
    to: 'swaroopkvm10@gmail.com', 
    subject: subject +':-' + Date().toLocaleString('en-GB', {year: 'numeric',month: '2-digit',day: '2-digit',hour: '2-digit',minute: '2-digit',second: '2-digit'}), 
    text: emailbody,
    replyTo: email,   
  };

      // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

