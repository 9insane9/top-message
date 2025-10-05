const { Router } = require("express")
const { indexController } = require("../controllers/indexController")

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ]

const indexRouter = Router()

indexRouter.get("/", indexController.getMessages())

module.exports = { indexRouter }
