const db = require("../db/queries")

module.exports = async function postNewMessage(req, res) {
  const { messageUser, messageText } = req.body

  try {
    await db.postMessage(messageUser, messageText)
    res.redirect("/")
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .send("Something went wrong while attempting to post message")
  }
}
