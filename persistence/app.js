const express = require('express');
var cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// Middlewares and global configuration go here

// Include routes
app.use('/users', require('./routes/users'));
app.use('/predict', require('./routes/predict'));
app.use('/sessions', require('./routes/sessions'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
