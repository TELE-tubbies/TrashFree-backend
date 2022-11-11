const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name :{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
    },
    photo:{
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },
    followers:{
        type: Array,
        default: [],
    },
    following:{
        type: Array,
        default: [],
    },
    past_events:{
        type: Array,
        default: [],    
    }
  },
);

module.exports = mongoose.model("user", userSchema);
