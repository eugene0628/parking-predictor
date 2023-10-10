const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    const garageTimes = req.body;

    if (!garageTimes || Object.keys(garageTimes).length !== 3) {
        res.status(400).json({ error: 'Please provide travel times for all three garages.' });
        return;
    }

    const travelTimesAndOccupancy = {};

    //WIP NEEDS TO INTERACT WITH FLASK

    for (const garage in garageTimes) {
        const travelTime = garageTimes[garage];
        const randomOccupancy = Math.floor(Math.random() * 100);

        travelTimesAndOccupancy[garage] = {
            travel_time: travelTime,
            expected_occupancy: randomOccupancy
        };
    }

    res.json(travelTimesAndOccupancy);
});

module.exports = router;
