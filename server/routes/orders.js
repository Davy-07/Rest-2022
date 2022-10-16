const express = require('express');
const { getOrder, createOrder,updateOrder,deleteOrder } = require('../controllers/order');

const router  = express.Router();

router.get('/',getOrder);
router.post('/',createOrder);
router.patch('/update/:id',updateOrder);
router.delete('/delete/:id',deleteOrder);
module.exports = router;
