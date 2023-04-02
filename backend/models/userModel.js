const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:String,
    email:{type:String, unique:true, required:true},
    password:{type:String, unique:true, required:true},
    phone:{type:Number, required:true},
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}