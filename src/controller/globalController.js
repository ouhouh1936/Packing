import Store from "../models/Store";
import Type from "../models/Type";

export const whenController = (req, res) => {
  res.render("layouts/when");
};
export const mainController = (req, res) => {
  res.render("main");
};

///////////////////Menu//////////////////////

//////////////////////////////////////////////
////////////////dessert///////////////////////
export const dessertController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter(
      (storeList) => storeList.typeName !== "도시락"
    );
    console.log(newData);
    res.render("screens/dessert", { storeList });
  } catch (e) {
    console.log(e);
  }
};

export const crudController = (req, res) => {
  res.render("crud");
};
