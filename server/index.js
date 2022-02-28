const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const postsRouter = require("./routes/posts")
const sendMail = require("./routes/email")
const imgRouter = require("./routes/img")
const multer = require("multer")
const path = require("path")
const app = express()

dotenv.config()

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log("Connectting Mongoose BD !"))
  .catch((err) => {
    console.log(err);
  })

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/posts", postsRouter)
app.use("/api/mail", sendMail)
app.use("/api/img", imgRouter)
app.use("/api/images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(express.static(path.join(__dirname,"/client/build")))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/client/build','index.html'))
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running !");
})   