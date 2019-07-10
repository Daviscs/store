const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
//require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/checkout", (req, res) => {
  const htmlEmail = `
        Name: ${req.body.firstName} ${req.body.lastName}
        Email: ${req.body.email}
        Message: ${req.body.message}
        Address: ${req.body.street} ${req.body.city}, ${req.body.state} ${
    req.body.zip
  }
     `;

  var transporter = nodemailer.createTransport({
    service: "yahoo",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: "Shopping Request",
    to: "austinjoey@ymail.com",
    subject: "Shopping Request",
    text: htmlEmail
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email22 sent:");
    }
  });
});

app.post("/api/form", (req, res) => {
  const htmlEmail = `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Message: ${req.body.message}
     `;

  var transporter = nodemailer.createTransport({
    service: "yahoo",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: "Shopping Request",
    to: "austinjoey@ymail.com",
    subject: "Shopping Request",
    text: htmlEmail
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:");
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
