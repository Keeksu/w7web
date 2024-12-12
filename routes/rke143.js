const express = require('express');
const router = express.Router();

const rke143Data = require('../data/nodejs.json');  

router.post('/', (req, res) => {
    const { name, code } = req.body;

    if (name === 'rke' && code === '143') {
        res.status(200).json(rke143Data);  
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;