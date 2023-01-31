const bodyParser = require("body-parser")
const express = require("express")
const customerModels = require("../models/costomerModels")
const customer_routes = express.Router()
customer_routes.use(bodyParser.json())

customer_routes.get("/customerDetails", async (req, res) => {
    try {
        const customerData = await customerModels.find()
        res.status(200).json({
            status: "success",
            result: customerData
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
customer_routes.post("/createCustomer", async (req, res) => {
    try {
        const customerData = await customerModels.find()
        const customer = await customerModels.create({
            customer_Id: `INTD${100 + customerData.length}`,
            customer_Name: req.body.customer_Name,
            email: req.body.email
        })
        res.status(200).json({
            status: "success",
            result: customer
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
module.exports = customer_routes