const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express();
app.use(cors());

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
