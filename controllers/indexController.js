const db = require("../db/queries")

module.exports = async function getMessages(req, res) {
  const { rows } = await db.getAllMessages()

  res.render("index", { rows })
}
