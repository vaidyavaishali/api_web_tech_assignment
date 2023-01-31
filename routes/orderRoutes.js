const bodyParser = require("body-parser")
const express = require("express")
const orderDetails = require("../models/orderDetails")
const order_routes = express.Router()
order_routes.use(bodyParser.json())

order_routes.get("/orders", async (req, res) => {
    // if()
    // console.log(customer)
    try {
        const Order = await orderDetails.find()
        res.status(200).json({
            status: "Success",
            result: Order
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

order_routes.post("/createOrders", async (req, res) => {

    try {
        // const customer = await orderDetails.find({cost_id: req.body.cost_id})
        const orders = await orderDetails.create({
            customer_id: req.customer_id,
            Inventary_id: req.Inventary_id,
            ItemName: req.ItemName,
            quantity: req.body.quantity
        })
        res.status(200).json({
            status: "Success",
            result: orders
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
module.exports = order_routes