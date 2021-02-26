const pool = require("../dbconfig");

module.exports = {
  newUser: async (req, res) => {
    const { name, email, password } = req.body;
    // express validator; put column names in double quotes !!!;
    try {
      const answerDB = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ( $1, $2, $3)",
        [name, email, password]
      );
      res.json({
        message:
          "New user with the following values:" + [name, email, password],
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
};
