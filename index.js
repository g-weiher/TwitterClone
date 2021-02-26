const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
app.get("/", (_, res) => {
  res.send("hello there");
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
