require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);

app.listen(process.env.PORT || 3000);
