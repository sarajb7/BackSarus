const express = require("express");
const {getTutoriales, createTutorial, editTutorial, deleteTutorial, getTutorialById} = require("../controllers/tutoriales");

const router = express.Router();

router.get("/", getTutoriales);
router.post("/", createTutorial);
router.put("/:id", editTutorial)
router.delete("/:id", deleteTutorial);
router.get("/:id", getTutorialById);

module.exports = router;