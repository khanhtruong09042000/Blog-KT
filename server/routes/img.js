const router = require("express").Router()
const Img = require("../models/Img")
const multer = require("multer")

//POST IMG
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/",upload.single("file"), async (req,res)=>{
    const newImg = new Img({
        photo: req.body.name
    })
    try {
        const saveImg = await newImg.save()
        res.status(200).json(saveImg)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET IMG
router.get("/find/:id", async (req, res) => {
    try {
        const findImg = await Img.findById(req.params.id)
        res.status(200).json(findImg)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router 