const router = require("express").Router()
const Post = require("../models/Post")

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATEPOST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    { new: true }
                )
                res.status(200).json(updatePost)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can't update this post !")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETEPOST
router.delete("/delete/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Post has been deleted...!")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can't delete this post !")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET POST
router.get("/find/:id", async (req, res) => {
    try {
        const findPost = await Post.findById(req.params.id)
        res.status(200).json(findPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL POSTS
router.get("/find", async (req, res) => {
    try {
        const findAllPost = await Post.find()
        res.status(200).json(findAllPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET MY POSTS
router.get("/find/mypost", async (req, res) => {
    const qUser = req.query.username
    try {
        let findPosts
        if (qUser) {
            findPosts = await Post.find({
                qUser
            });
        } else {
            findPosts = await Post.find();
        }
        res.status(200).json(findPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router 