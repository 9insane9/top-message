require("dotenv").config()

const path = require("node:path")
const express = require("express")
const indexRouter = require("./routes/indexRouter")
const newRouter = require("./routes/newRouter")

const app = express()
const PORT = process.env.PORT || 5000

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/new", newRouter)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("500: Server Error")
})

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`Message board listening on port ${PORT}!`)
})
