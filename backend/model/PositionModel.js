const { model } = require("mongoose");

const { PositionSchemas } = require("../schemas/PositionSchemas");

const PositionModel = new model("Position",PositionSchemas);

module.exports = {PositionModel};