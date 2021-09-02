const Type = require("../models/Type");
const User = require("../models/User");
const Store = require("../models/Store");

const whenController = (req, res) => {
  res.render("layouts/when");
};

////////////Login/////////////

const mainController = (req, res) => {
  const loginFlag = req.userLoginFlag || false;

  let isAuthenticated = false;

  if (loginFlag) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    homeController(req, res);
  } else {
    res.render("loginMain");
  }
};

const homeController = async (req, res) => {
  const sess = req.session;

  if (!sess.userId) {
    mainController(req, res);
    return;
  }
  try {
    const loginUser = await User.findOne({ _id: sess.userId });

    res.render("main", { list: loginUser });
  } catch (e) {
    console.log(e);
    mainController(req, res);
  }
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
    const newData = storeList.filter((data) => data.type.typeName === "디저트");

    res.render("screens/dessert", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////snackBar///////////////////////
const snackBarController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName === "분식");

    res.render("screens/snackBar", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////fast///////////////////////
const fastController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName === "패스트");

    res.render("screens/fast", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////lunchBox///////////////////////
const lunchBoxController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName === "도시락");

    res.render("screens/lunchBox", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////pork///////////////////////
const porkController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter(
      (data) => data.type.typeName === "족발.보쌈"
    );

    res.render("screens/pork", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////china///////////////////////
const chinaController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName === "중국집");

    res.render("screens/china", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////ggim///////////////////////
const ggimController = async (req, res) => {
  try {
    const storeList = await Store.find({}, {}).populate({
      model: Type,
      path: "type",
    });
    const newData = storeList.filter((data) => data.type.typeName === "찜.탕");

    res.render("screens/ggim", { list: newData });
  } catch (e) {
    console.log(e);
  }
};
////////////////////////////////////////////////////////////////
//////////////////////////crud//////////////////////////////////

const crudBaseController = (req, res) => {
  res.render("crudBase");
};
const storeCreateController = (req, res) => {
  res.render("storeCreate");
};

const storeController = async (req, res) => {
  const {
    body: { sname, stype, smenu },
  } = req;

  try {
    const result = await Store.create({
      name: sname,
      type: stype,
      menus: smenu,
    });
    console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅");
    console.log(result);
    console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅");
    res.render("main", { msg: "데이터가 추가되었습니다." });
  } catch (e) {
    console.log(e);
  }
  homeController(req, res);
};

const globalControllers = {
  whenController,
  homeController,
  dessertController,
  loginController,
  mainController,
  snackBarController,
  fastController,
  lunchBoxController,
  porkController,
  chinaController,
  ggimController,
  crudBaseController,
  storeCreateController,

  storeController,
};

module.exports = globalControllers;
