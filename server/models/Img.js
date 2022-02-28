const mongoose = require("mongoose")

const ImgSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Img", ImgSchema)