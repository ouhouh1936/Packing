const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const path = require("path");
const globalRouter = require("./router/globalRouter");
const connect = require("../db");
const expressSession = require("express-session");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  expressSession({
    secret: "@#@$MYSIGN#@$#$",
    resave: false,
    saveUninitiqlized: true,
  })
);
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
