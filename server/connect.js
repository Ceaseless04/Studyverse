import dotenv from "dotenv";

const express = require("express");

const app = expressI();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log('Exp')
})