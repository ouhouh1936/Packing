const Store = require("../models/Store");
const Type = require("../models/Type");

const whenController = (req, res) => {
  res.render("layouts/when");
};
const mainController = (req, res) => {
  res.render("main");
};

///////////////////Menu//////////////////////

//////////////////////////////////////////////
////////////////dessert///////////////////////
const dessertController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName !== "도시락");
    console.log(newData);
    res.render("screens/dessert", { list: newData });
  } catch (e) {
    console.log(e);
  }
};

const crudController = (req, res) => {
  res.render("crud");
};

const globalControllers = {
  whenController,
  mainController,
  dessertController,
  crudController,
};

module.exports = globalControllers;
