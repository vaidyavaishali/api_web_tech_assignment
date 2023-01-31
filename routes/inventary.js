const bodyParser = require("body-parser")
const express = require("express")
const inventaryData = require("../models/inventaryModels")
const inventary_routes = express.Router()
inventary_routes.use(bodyParser.json())

inventary_routes.get("/inventory", async (req, res) => {
    try {
        const inventary = await inventaryData.find()
        res.status(200).json({
            status: "Success",
            result: inventary,
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

inventary_routes.get("/inventory/inventarytype/:type", async (req, res) => {
    try {
        const inventary = await inventaryData.find({type:req.params.Inventary_type})
        res.status(200).json({
            status: "Success",
            result: inventary,
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

inventary_routes.post("/createInventory", async (req, res) => {
    try {
        const inventary = await inventaryData.find()
        const createInventary = await inventaryData.create({
            Inventary_id: `INTD${500 + inventary.length}`,
            Inventary_type: req.body.Inventary_type,
            Items: req.body.Items,
            avail_quantity: req.body.avail_quantity
        })
        res.status(200).json({
            status: "Success",
            result: createInventary,
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

inventary_routes.put('/itemName/availableQuantity/:id', async (req, res) => {
    try {
        const inventary = await inventaryData.findOne({ id: req.params._id })
        const update = await inventaryData.updateOne({
           avail_quantity: req.body.avail_quantity
        })
        res.status(200).json({
            status: "Success",
            result: update,
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = inventary_routes
