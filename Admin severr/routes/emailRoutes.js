const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'l191228@lhr.nu.edu.pk', // Your email address
    pass: 'starlord', // Your email password
  },
});

router.post('/send', upload.array('attachments', 3), (req, res) => {
  const { to, subject, text } = req.body;
  const attachments = req.files || [];
  console.log(attachments)

  const mailOptions = {
    from: 'l191228@lhr.nu.edu.pk', // Sender's email address
    to,
    subject,
    text,
    attachments: attachments.map(file => ({
        filename: file.originalname, // The original name of the file
        content: file.buffer, // The file data as a buffer
      })),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

module.exports = router;
