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
        "date ":{
            type: Date,
            required: true,
        },
        "time":{
            type: String,
            required: true,
        },
        "participants":{
            type: Array,
        },
        
    }
);

module.exports = mongoose.model("event", eventSchema);