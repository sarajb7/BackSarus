const express = require("express");
const {getJuegos, createJuego, editJuego, deleteJuego, getJuegoById} = require("../controllers/juegos");

const router = express.Router();

router.get("/", getJuegos);
router.post("/", createJuego);
router.put("/:id", editJuego);
router.delete("/:id", deleteJuego);
router.get("/:id", getJuegoById);

module.exports = router;