const express = require('express');
const router = express.Router();


const { PrismaClient } = require('../prisma/generated/client'); // Adjust the path as needed
const prisma = new PrismaClient();

router.use(express.json());

async function createSessionDB(sessionData) {

    try {

        const user = await prisma.SESSIONS.create({
            data: {
                USER: sessionData.user,
                rec_garage: sessionData.recommendation,
                rec_avail_1: sessionData.garage1.expected_occupancy,
                rec_travel_time_1: sessionData.garage1.travel_time,
                rec_avail_2: sessionData.garage2.expected_occupancy,
                rec_travel_time_2: sessionData.garage2.travel_time,
                rec_avail_3: sessionData.garage3.expected_occupancy,
                rec_travel_time_3: sessionData.garage3.travel_time,
                createdAt: new Date(),
            },
        });
        console.log('Created user:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

async function getFakeData(garageTimes) {
    const travelTimesAndOccupancy = {};
    for (const garage in garageTimes) {
        const travelTime = garageTimes[garage];
        const randomOccupancy = Math.floor(Math.random() * 100);

        travelTimesAndOccupancy.user = 1;
        travelTimesAndOccupancy.recommendation = "garage 1";


        travelTimesAndOccupancy[garage] = {
            travel_time: travelTime,
            expected_occupancy: randomOccupancy
        };
    }

    console.log("GENERATED GARAGE TIMES: ", travelTimesAndOccupancy)
    return travelTimesAndOccupancy;
}



router.post('/', async (req, res) => {
    const garageTimes = req.body;

    if (!garageTimes || Object.keys(garageTimes).length !== 3) {
        res.status(400).json({ error: 'Please provide travel times for all three garages.' });
        return;
    }

    const sessionData = await getFakeData(garageTimes);

    createSessionDB(sessionData);

    res.json(sessionData);
});

module.exports = router;
