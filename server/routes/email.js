const nodemailer = require("nodemailer")
const router = require("express").Router()

router.post("/send", function (req, res) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'Email của bạn',
            pass: 'Pass của bạn'
        }
    })

    const mailOption = {
        to: 'khanh09042000@gmail.com',
        subject: req.body.title,
        text: req.body.desc
    }

    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent: " + info.response);
        }
    })
})

module.exports = router
