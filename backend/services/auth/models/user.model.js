import mongoose from "mongoose"

/* here we define the whole schema of the user model, which is a blueprint for how the user data will be stored in the database. It includes fields like name, email, password, and role. Each field has a type and some have additional properties like required or unique. */

const userSchema = new mongoose.Schema({

    firebaseUid:{
        type:String,
        unique:true,
    },
    name:String,
    email:String,
    avatar:String

},{
    timestamps:true
})

const User = mongoose.model("User", userSchema)
export default User