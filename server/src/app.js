require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/api', (req, res) => {
    res.json({ "users": [23, 2, 1, 12, 43, 42, 44, 90] });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});