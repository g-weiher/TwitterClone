const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const messagesRoutes = require("./Routes/messages");
app.use("/messages", messagesRoutes);
app.get("/", (_, res) => {
  res.send("hello there");
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
