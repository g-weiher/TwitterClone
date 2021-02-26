const pool = require("../dbconfig");

module.exports = {
  newUser: async (req, res) => {
    const { name, email, password, image } = req.body;
    // express validator; put column names in double quotes !!!;
    try {
      const answerDB = await pool.query(
        "INSERT INTO users (name, email, password, image) VALUES ( $1, $2, $3, $4)",
        [name, email, password, image]
      );
      res.json({
        message:
          "New user with the following values:" + [name, email, password, image],
        code: 200,
        data: answerDB.rows,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const answerDB = await pool.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);
      res.json({
        message: "Retrieve user by id:" + id,
        code: 200,
        data: answerDB.rows[0],
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getUsers: async (_, res) => {
    try {
      const answerDB = await pool.query("SELECT * FROM users");
      res.json({
        message: "Retrieved all user",
        code: 200,
        data: answerDB.rows,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  getRandomUser: async (_, res) => {
    try {
      const answerDB = await pool.query("SELECT * FROM users ORDER BY RANDOM() LIMIT 1");
      res.json({
        message: "Retrieved all user",
        code: 200,
        data: answerDB.rows,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
};
