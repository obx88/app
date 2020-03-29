// create reusable transporter object using the default SMTP transport
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT, // SSL PORT
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (recipient, subject, htmlContent, prefix, suffix) =>
  new Promise((resolve, reject) => {
    // Data validation - if something wrong then it adds errors to array which is returned then
    // Unless every argument is set then the code will reject a promise or if the argument isnt that important then the code will assign a standard value to the argument
    const errors = []; // array for pushing validation errors to let user know whats wrong
    let fromPrefix; // created this because eslint is annoying as fuck
    let fromSuffix; // look line above, here as well

    // Checking if every argument is set
    if (!recipient) {
      const error = new Error(
        "Recipient isn't set, if you see this error, let us know that we could fix this error",
      ); // creating an error to reject a promise,pssst eslint is my best friend at using good practices
      reject(error);
    }
    if (!subject) {
      errors.push('You must type the subject of an email');
    }
    if (!htmlContent) {
      errors.push('Email content cannot be empty');
    }
    if (!prefix || !suffix) {
      fromPrefix = '';
      fromSuffix = '';
    } else {
      fromPrefix += `${prefix} `;
      fromSuffix = ` ${suffix}`;
    }

    if (errors.length > 0) {
      resolve(errors);
    } else {
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: `"${fromPrefix} InGoodAtmosphere ${fromSuffix}" <${process.env.MAIL_USER}>`, // sender address
          to: recipient, // list of recipients
          subject, // Subject line
          text: htmlContent, // plain text body
          html: htmlContent, // html body
        },
        (err) => {
          if (err) {
            reject(err);
          } else resolve(errors);
        },
      );
    }
  });

module.exports = sendMail;