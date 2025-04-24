const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:'gmail',
    secure:'true',
    port: 465,
    auth: {
        user: 'nagarkotichandu38@gmail.com',
        pass: ''
    }
});
module.exports = transporter;
