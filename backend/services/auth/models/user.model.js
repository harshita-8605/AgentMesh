import mongoose from "mongoose"

// Schema is basically the blue print of the user jo chahiye hit ahai login and all krne ke liye. Mongoose ko use krke hi we create a schema 
const userSchema=new mongoose.Schema({
    firebaseUid:{
        type : String,
        unique : true
    },
    name : String,
    email : String,
    avatar : String
},{
    timestamps: true
})

// now schema ready hai, ussi ke structure ka model bnana hai humein. User is the model we have created here. Mongoose ko use krke hi hum model bnate hai 
const User = mongoose.model("User",userSchema)
export default User