const { verifyToken } = require("../utils/jwt");
const User = require("../api/models/user");

const isAuth = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(400).json({ message: "No autorizado" });
    }
    const token = auth.split(" ")[1];
    const tokenVerified = verifyToken(token);

    if (!tokenVerified.id) {
      return res
        .status(400)
        .json({ message: "No autorizado", message: tokenVerified });
    }

    const userProfile = await User.findById(tokenVerified);

    req.userProfile = userProfile;
    next();
  } catch (error) {}
};

const isAdmin = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(400).json({ message: "No tienes permisos" });
    }
    const token = auth.split(" ")[1];
    const tokenVerified = verifyToken(token);
    console.log(tokenVerified);

    if (!tokenVerified.id) {
      return res
        .status(400)
        .json({ message: "No tienes permisos", message: tokenVerified });
    }
    const adminProfile = await User.findById(tokenVerified.id);

    if (adminProfile.role === "admin") {
      req.adminProfile = adminProfile; 
      next();
    } else {
      return res.status(500).json({ message: "Acceso denegado" });
    }
  } catch (error) {}
};

module.exports = { isAuth, isAdmin };