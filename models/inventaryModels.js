const mongoose = require("mongoose")

const inventaryScema = new mongoose.Schema({
    Inventary_id: { type: String, unique: true },
    Inventary_type: { type: String },
    Items: { type: String },
    avail_quantity: { type: Number }

})

const inventary_models = mongoose.model("inventary", inventaryScema)
module.exports = inventary_models