const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")

//UPDATE
router.put("/update/:id", async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }

    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("User has been deleted...!")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER
router.get("/find/:id", async (req, res) => {
    try {
        const findUser = await User.findById(req.params.id)
        res.status(200).json(findUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL USER
router.get("/find", async (req, res) => {
    try {
        const findAllUser = await User.find()
        res.status(200).json(findAllUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router