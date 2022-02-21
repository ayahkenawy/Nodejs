const router = require('express').Router()
const postController = require("../app/controller/post.controller")
router.post("/add", postController.add)
module.exports= router