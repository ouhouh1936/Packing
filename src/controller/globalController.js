const Store = require("../models/Store");
const Type = require("../models/Type");

const whenController = (req, res) => {
  res.render("layouts/when");
};
const mainController = (req, res) => {
  res.render("main");
};

const storeMenuController = (req, res) => {
  res.render("screens/boardWrite");
};
const loginController = async (req, res) => {
  const sess = req.session;
  let loginFlag = false;

  const input_id = req.body.input_id;
  let input_pass = req.body.input_pass;
  input_pass = String(input_pass);

  try {
    const result = await User.find();

    Promise.all(
      result.map((user) => {
        if (user.userId === input_id && user.userPassword === input_pass) {
          loginFlag = true;
          sess.userId = user._id;
        }
      })
    );

    req.userLoginFlag = loginFlag;
    mainController(req, res);
  } catch (e) {
    console.log(
      "[SYSTEM] 사용자가 로그인을 시도하였지만, 에러가 발생하였습니다."
    );
    mainController(req, res);
  }
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
  storeMenuController,
  loginController,
};

module.exports = globalControllers;
