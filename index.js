const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const pool = require("./dbconfig");
const app = express();


const messagesRoutes = require("./Routes/messages");
const userRoutes = require("./Routes/users");

app.use("/messages", messagesRoutes);
app.use("/users", userRoutes);
app.get("/usertest", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.send(result);
});
app.get("/", (_, res) => {
  res.send("hello there");
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
