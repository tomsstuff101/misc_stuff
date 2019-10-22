// This is where we handle our server setup
const express = require("express")
const path = require("path")
const hbs = require("express-handlebars")

const routes = require("./routes/index")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs"
  })
)

app.set("view engine", ".hbs")

app.use("/", routes)

app.listen(3007, () => {
  console.log("Listening on port 3007")
})
