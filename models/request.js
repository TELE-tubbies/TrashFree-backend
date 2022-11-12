const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema(
    {
        "date":{
            "type":String,
            "required":true
        },
        "pickup_time":{
            "type":String,
            "required":true
        },
        "waste_type":{
            "type":Array,
            "required":true
        },
        "location":{
            "type":String,
            "required":true
        }
    }
);

module.exports = mongoose.model("request", requestSchema);