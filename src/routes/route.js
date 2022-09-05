const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor);

router.get("/getAuthorsData", authorController.getAuthorsData)

module.exports = router;