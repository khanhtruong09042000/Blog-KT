const mongoose = require("mongoose")

const MailSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Mail", MailSchema)