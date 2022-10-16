const express = require('express');
const getAdmin = require('../controllers/admin');

const router  = express.Router();

router.get('/',getAdmin);


module.exports = router;
