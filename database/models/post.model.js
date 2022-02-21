const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    }},
{ timestamps: true }
)
postSchema.methods.toJSON = function(){
    const post = this.toObject()
    return post
}
const post = mongoose.model("post", postSchema)
module.exports = post