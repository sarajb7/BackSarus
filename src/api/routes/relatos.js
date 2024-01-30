const express = require("express");
const {getRelato, createRelato, editRelato, deleteRelato, getRelatoById} = require("../controllers/relatos");

const router = express.Router();

router.get("/", getRelato);
router.post("/", createRelato);
router.put("/:id", editRelato)
router.delete("/:id", deleteRelato);
router.get("/:id", getRelatoById);

module.exports = router;