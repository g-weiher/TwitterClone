const pool = require("../dbconfig");

const messageQuery =
  "SELECT messages.id, messages.text, messages.date, row_to_json(users.*) AS user " +
  "FROM messages JOIN users ON (id_user=users.id)";

module.exports = {
  getMessages: async (_, res) => {
    try {
      const answerDB = await pool.query(messageQuery);
      res.json({
        message: "get messages",
        code: 200,
        data: answerDB.rows,
      });
    } catch (e) {
      console.error(e);
      res.json({
        message: "unexpected error",
        code: 500,
      });
    }
  },
  getMessagebyId: async (req, res) => {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      res.status(400).json({
        code: 400,
        message: id + " is not a valid ID",
      });
      return;
    }

    try {
      const answerDB = await pool.query(
        `${messageQuery} WHERE messages.id = $1`,
        [id]
      );

      if (!answerDB.rows.length) {
        res.json({
          message: "message not found",
          code: 404,
        });
        return;
      }
      res.json({
        message: "get messages",
        code: 200,
        data: answerDB.rows[0],
      });
    } catch (e) {
      console.error(e);
      res.json({
        message: "unexpected error",
        code: 500,
      });
    }
  },
  createMessage: async (req, res) => {
    const { text, user_id } = req.body;

    if (!text || !user_id) {
      res.status(400).json({
        code: 400,
        message: "message not valid",
      });
      return;
    }
    try {
      const answerDB = await pool.query(
        "INSERT INTO messages (text, date, id_user) VALUES ( $1, NOW(), $2)",
        [text, user_id]
      );
      res.json({
        message: `message inserted: text: ${text}, user_id: ${user_id}`,
        code: 200,
      });
    } catch (e) {
      console.error(e);
      res.json({
        message: "unexpected error",
        code: 500,
      });
    }
  },
};
