const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
    {
        "title":{
            type: String,
            required: true,
        },
        "location":{
            type: String,
            required: true,
        },
        "date":{
            type: String,
            required: true,
        },
        "time":{
            type: String,
            required: true,
        },
        "image":{
            type: String,
        },
        "participants":{
            type: Array,
        },
        
    }
);

module.exports = mongoose.model("event", eventSchema);