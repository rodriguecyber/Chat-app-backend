import mongoose from "mongoose"
const  userSehma =new mongoose.Schema({
fullName:String,
username:String,
email:String,
profilepic:{
    type:String,
default:'no profile'
},
password:String,
status:{
    type:String,
    default:'offline'
}
})
const User =mongoose.model('User',userSehma)
export default User