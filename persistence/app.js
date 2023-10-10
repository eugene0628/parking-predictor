const express = require('express');
require('dotenv').config();

const app = express();

// Middlewares and global configuration go here

// Include routes
app.use('/users', require('./routes/users'));
app.use('/predict', require('./routes/predict'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
