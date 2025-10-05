const pool = require("../db/pool")

async function getAllMessages() {
  const rows = await pool.query("SELECT * FROM messages")
  return rows
}

async function postMessage(user, message) {
  const query = "INSERT INTO messages (date, user, message) VALUES ($1, $2, $3)"
  const values = [new Date(), user, message]
  await pool.query(query, values)
}

module.exports = { postMessage, getAllMessages }
