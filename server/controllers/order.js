import OrderDetails from "../models/orderDetails.js";

export const getOrder = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.find();
        console.log(orderDetails);
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createOrder = async (req, res) => {
    const order = req.body;

    const newOrder = new OrderDetails(order);

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

