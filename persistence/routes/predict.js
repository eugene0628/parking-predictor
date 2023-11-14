const express = require('express');
const router = express.Router();
const axios = require('axios');



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

async function callModel(garageTimes) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', {
            garage1: garageTimes.garage1,
            garage2: garageTimes.garage2,
            garage3: garageTimes.garage3
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

router.post('/', async (req, res) => {
    const garageTimes = req.body;

    if (!garageTimes || Object.keys(garageTimes).length !== 3) {
        res.status(400).json({ error: 'Please provide travel times for all three garages.' });
        return;
    }

    const sessionData = await callModel(garageTimes);

    createSessionDB(sessionData);

    res.json(sessionData);
});

module.exports = router;
