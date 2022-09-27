import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    name: String,
    cost: {
        type: Number,
        default: 0
    },
    orderedAt: {
        type: Date,
        default: new Date()
    },
});

const OrderDetails = mongoose.model('OrderDetails', orderSchema);

export default OrderDetails;
