const pool = require("../db/pool")

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages")
  return rows
}

async function postMessage(messageUser, messageText) {
  const query =
    "INSERT INTO messages (date, message_user, message_text) VALUES ($1, $2, $3)"
  const values = [new Date(), messageUser, messageText]
  await pool.query(query, values)
}

module.exports = { postMessage, getAllMessages }
