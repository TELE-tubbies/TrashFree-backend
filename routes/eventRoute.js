const router = require('express').Router();
const event = require('../models/event');

router.post("/create", (req, res) => {
    const { title, location, date, time } = req.body;
    const newEvent = new event({
        title,
        location,
        date,
        time
    });
    
    newEvent.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            res.status(200).json({message: 'Event created successfully'});
        }
    });
});

router.post("/join", (req, res) => {
    const { eventId, userId  } = req.body;
    event.findOne({ _id: eventId }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else if (!data) {
            res.status(400).json({message:"Event not found"});
        } else {
            data.participants.push(userId);
            data.save((err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    console.log(data);
                    res.status(200).json({message: 'Event joined successfully'});
                }
            });
        }
    });
});

router.get("/getEvents", (req, res) => {
    event.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    });
});

module.exports = router;