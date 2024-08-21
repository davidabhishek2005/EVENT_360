import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true ,"Name required!"],
        minLength : [3, "Name must contain atleast 3 characters"],
    },
    email:{
        type: String,
        required: [true ,"Email required!"],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    subject:{
        type: String,
        required: [true ,"Subject required!"],
        minLength : [5, "Subject must contain atleast 5 characters"],
    },
    message:{
        type: String,
        required: [true ,"Message required!"],
        minLength : [20, "Message must contain atleast 20 characters"],
    },

});

export const Message = mongoose.model("Message", messageSchema);