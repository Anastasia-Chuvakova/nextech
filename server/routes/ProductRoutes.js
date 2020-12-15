const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/getProducts");

router.get("/", (req, res) => {
  res.json(getProducts(req.params.id));
});

router.get("/:id", (req, res) => {
  res.json(getProducts(req.params.id));
});

module.exports = router;
