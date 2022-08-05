const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = 3000;

const webRouter = require("./routes/web.js");
const apiRouter = require("./routes/api.js");

var corsOptions = {
  origin: 'http://mehmetuysal.texh',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use("/", webRouter);
app.use("/api", apiRouter);

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`
App runs on port ${port}
You can test at http://localhost:${port}`);
});
