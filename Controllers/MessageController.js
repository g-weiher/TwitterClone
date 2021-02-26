//const pool = require("../dbconfig");

placeholderMessages = [
  {
    id: 1,
    text: "some sample text",
    date: new Date().getUTCDate,
    user: {
      id: 1,
      name: "user1",
      email: "someEmail",
    },
  },
  {
    id: 2,
    text: "some sample text2",
    date: new Date().getUTCDate,
    user: {
      id: 1,
      name: "user1",
      email: "someEmail",
    },
  },
  {
    id: 1,
    text: "some sample text",
    date: new Date().getUTCDate,
    user: {
      id: 1,
      name: "user1",
      email: "someEmail",
    },
  },
  {
    id: 2,
    text: "some sample text2",
    date: new Date().getUTCDate,
    user: {
      id: 1,
      name: "user1",
      email: "someEmail",
    },
  },
  {
    id: 1,
    text: "some sample text",
    date: new Date().getUTCDate,
    user: {
      id: 2,
      name: "user2",
      email: "someEmail2",
    },
  },
  {
    id: 2,
    text: "some sample text2",
    date: new Date().getUTCDate,
    user: {
      id: 2,
      name: "user2",
      email: "someEmail2",
    },
  },
];

module.exports = {
  getMessages: async (_, res) => {
    /*try {
        const answerDB = await pool.query('SELECT * FROM messages, user WHERE user ,
        [first_name, last_name, age, id]);

    } catch(e) {
        console.error(e);
        res.json({
            message: "unexpected error",
            code: 500,
        })
    }*/
    res.json({
      message: "get messages",
      code: 200,
      data: placeholderMessages,
    });
  },
  getMessagebyId: async (req, res) => {
    const { id } = req.params;
    res.json({
      message: "get message with id:" + id,
      code: 200,
      data: placeholderMessages[id + 1],
    });
  },
  createMessage: async (req, res) => {
    const { text, date, user_id } = req.body;
    res.json({
      message: `message inserted: text: ${text}, date: ${date}, user_id: ${user_id}  (stil to be done`,
      code: 200,
    });
  },
};
