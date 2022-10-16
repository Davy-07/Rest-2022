const OrderDetails = require('../models/orderDetails');

const getOrder = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.find();
        console.log(orderDetails);
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createOrder = async (req, res) => {
    const order = req.body;
    console.log(req.body);
    const newOrder = new OrderDetails(order);

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateOrder = async(req,res) =>{
    try{
        console.log(req.params);
        const orderID = req.params.id;
        const data = req.body;
        const updatedOrder = await OrderDetails.findOneAndUpdate({_id:orderID},data,{
            new: true,
            runValidators: true
        })
        if(!updatedOrder){
            return res.status(404).json({msg: "No such order Found"});
        }
        else{
            res.status(200).json({updatedOrder});
        }
    }
    catch(error){
            res.status(500).json({msg:error});
    }
}

const deleteOrder = async(req,res) =>{
    try{
        const orderID = req.params.id;
        const deletdOrder = await OrderDetails.findByIdAndDelete({_id: orderID});
        if(!deletdOrder)
        {
            return res.status(404).json({msg: "No such order Found"});
        }
        else{
            res.status(200).json({deletdOrder});
        }
    }
    catch(error)
    {
        res.status(500).json({msg:error});
    }
}

module.exports = {getOrder,createOrder,updateOrder,deleteOrder};

