const { PostModel } = require("../model/post.model")
const { auth } = require("../middleware/auth.middleware")
const express = require('express');

const postRouter = express.Router()

postRouter.post("/add", auth, async (req, res) => {
    try {
        const post = new PostModel(req.body)
        await post.save()
        res.status(200).send({ "msg": "post added", "post": req.body })
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

postRouter.get("/", auth, async (req, res) => {
    try {
        const post = await PostModel.find({ userID: req.body.userID })
        res.status(200).send(post)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

postRouter.patch("/update/:postID", auth, async (req, res) => {
    const { postID } = req.params
    try {
        const post = await PostModel.findOne({ _id:postID })
        if (req.body.userID === post.userID) {
            await PostModel.findByIdAndUpdate({ _id: postID }, req.body)
            res.status(200).send(req.body)
        } else {
            res.status(400).send({ "msg": "You are not authorized" })

        }

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

postRouter.delete("/delete/:postID", auth, async (req, res) => {
    const { postID } = req.params
    try {
        await PostModel.findByIdAndDelete({ _id: postID })
        res.status(200).send({ "msg": "note deleted" })

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})


module.exports = {
    postRouter
}
