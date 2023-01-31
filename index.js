const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const Inventary = require("./routes/inventary")
const Customer = require("./routes/customer")
const Order = require("./routes/orderRoutes")
const app = express()
app.use(bodyparser.json())
const port = 3005
mongoose.connect("mongodb+srv://prt_assignment:prt_assignment@prt.tf22cxz.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("connected to db")
})

app.use("/", Inventary)
app.use("/", Customer)
app.use("/", Order)

app.listen(port, () => {
    console.log(`server running port ${port}`)
})
