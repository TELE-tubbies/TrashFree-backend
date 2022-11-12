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
  },
);

module.exports = mongoose.model("user", userSchema);
