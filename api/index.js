const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sendmail", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "satanizm1013@gmail.com",
      pass: "up05281131",
    },
  });

  var mailOptions = {
    from: "satanizm1013@gmail.com",
    to: "nasaanasaa.070122@gmail.com",
    subject: "If you could change one thing about your self, what would it be?",
    text: "Hello, Dear Nestizen",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});