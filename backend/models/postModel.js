const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    shoename:String,
    price:String,
    rating:String,
    color:String,
    userID:String
},{
    versionKey:false
})

const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}