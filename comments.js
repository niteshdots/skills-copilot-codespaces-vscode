// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a list of comments
const comments = [
    {
        id: 1,
    }]
// Create a route for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

