const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const port = 443;

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const apiRouter = require("./routes/api.js");
const webRouter = require("./routes/web.js");

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.use("/", webRouter);

app.listen(port, () => {
  console.log(`
App runs on port ${port}
You can test at http://localhost:${port}`);
});
