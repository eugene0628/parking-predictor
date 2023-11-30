const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../prisma/generated/client'); // Adjust the path as needed
const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const sessions = await prisma.SESSIONS.findMany();
        res.json(sessions);
    } catch (error) {
        console.error('Error fetching sessions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;