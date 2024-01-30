const express = require("express");

const {register, login, profile, getUser, getUserById, deleteUser, putUser} = require("../controllers/user");
const { isAdmin } = require("../../middleware/auth");
const { isAuth } = require("../../middleware/auth");
//const { isAuthProfile } = require("../../middleware/auth"); 
const router = express.Router();

// router.get("/profile/", profile); // url del user logueado
router.get("/profile/:id", getUserById); //url para el admin

router.post("/register", register);
router.post("/login", login);
router.get("user/profile", profile);

router.get("/allusers", getUser);// url solo es del admin para ver a todos los users
router.put("/edit/:id", putUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;