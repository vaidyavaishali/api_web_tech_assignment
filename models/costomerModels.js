const mongoose = require("mongoose")

const costomerSchema = new mongoose.Schema({
     customer_Id:{type:String},
     customer_Name:{type:String},
     email:{type:String}
})

const constomer_models = mongoose.model("constomer", costomerSchema)
module.exports = constomer_models