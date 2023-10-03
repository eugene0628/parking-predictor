const express = require('express');
const router = express.Router();
const db = require('../db'); // Import your database connection

router.get('/:uid', (req, res) => {
    const uid = req.params.uid;

    const sql = 'SELECT * FROM USERS WHERE UID = ?';
    db.query(sql, [uid], (err, results) => {
        if (err) {
            console.error('Error querying the database: ' + err);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(results[0]);
        }
    });
});

module.exports = router;
