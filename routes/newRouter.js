const Router = require("express")
const newController = require("../controllers/newController")

const newRouter = Router()

newRouter.get("/", (req, res) => res.render("form"))

newRouter.post("/", newController)

module.exports = newRouter
