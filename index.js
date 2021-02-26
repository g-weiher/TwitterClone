const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//const pool = require("./dbconfig");
const messagesRoutes = require("./Routes/messages");
const userRoutes = require("./Routes/users");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/messages", messagesRoutes);
app.use("/users", userRoutes);
app.get("/", async (_, res) => {
  res.send("welcome to our message api");
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
