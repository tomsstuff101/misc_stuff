// This is where we declare our routes
const { main } = require("../lib/index")
const { Router } = require("express")
const router = Router()

router.get("/", async (req, res) => {
  let weather = await main(req.query.location)

  res.render("index", { weather })
})

module.exports = router
