const express = require('express');
const router = express.Router();

const pumpkinData = require('../data/pumpkin.json');
const broccoliData = require('../data/broccoli.json');
const nodeData = require('../data/nodejs.json');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Got pumpkin?'});
});

router.post('/', (req, res) => {

    if(req.body.username !== 'admin' || req.body.password !== "1234") {
        res.status(200).json({broccoliData}); 
    } else {
        res.status(200).json({pumpkinData});
    }
});

router.post('/', (req, res) => {

    if (name === 'rke' && code === '143') {
        res.status(200).json({ nodeData });
    } 

    else {
        res.status(401).json({ message: 'invalid credentials' });
    }
});


module.exports = router;