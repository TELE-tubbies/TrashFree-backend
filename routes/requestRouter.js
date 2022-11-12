const router = require('express').Router();
const request = require('../models/request');

router.post("/postRequest", (req, res) => {
    const { date, pickup_time, waste_type, location } = req.body;
    const newRequest = new request({
        date,
        pickup_time,
        waste_type,
        location
    });
    
    newRequest.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            res.status(200).json({message: 'Request created successfully'});
        }
    });
});


router.get("/getRequests", (req, res) => {
    request.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (data.length > 0) {
                res.status(200).json(data);
            } else {
                res.status(404).json({message: "No requests found"});
            }
        }
    });
});



module.exports = router;