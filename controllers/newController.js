const db = require("../db/queries")

module.exports = async function postNewMessage(req, res) {
  const { user, message } = req.body

  try {
    await db.postMessage(user, message)
    res.redirect("/")
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .send("Something went wrong while attempting to post message")
  }
}
