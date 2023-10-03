const express = require('express');
const app = express();

// Middlewares and global configuration go here

// Include routes
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
