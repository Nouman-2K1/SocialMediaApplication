import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a362c3ce454040",
    pass: "203bdcab52dcd5",
  },
});
const LoginEmail = async (params) => {
  const { from, to, subject, text } = params;
  const info = await transporter.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: text, // plain text body
    html: `<b>${text}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

export default LoginEmail;
