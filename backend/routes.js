const express = require('express');

const router = express.Router();

router.get("/todos", (req,res) => {
    res.status(200).json( {msg : "Get Request"})
});

router.post("/todos", (req,res) => {
    res.status(201).json( {msg : "Post Request"})
});

router.delete("/todos/:id", (req,res) => {
    res.status(200).json( {msg : "Delete Request"})
});

router.put("/todos/:id", (req,res) => {
    res.status(200).json( {msg : "Put Request"})
});

module.exports = routers