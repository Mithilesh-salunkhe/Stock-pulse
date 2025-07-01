const {model} = require("mongoose");

const{HoldingsSchema} = require("../Schemas/HoldingsSchema");

const HoldingsModel = new model("holding" , HoldingsSchema);

module.exports = {HoldingsModel};