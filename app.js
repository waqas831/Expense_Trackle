require('./db/db');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const TransactionRoute = require("./routes/TransactionRoute");

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 8080;

app.use("/tracker", TransactionRoute);

app.listen(port, (err) => {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log("server is running on port", port);
  }
});
