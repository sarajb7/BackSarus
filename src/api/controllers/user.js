const User = require("../models/user");

const { validateEmailDB, validatePassword } = require("../../utils/validator");
const bcrypt = require("bcrypt");
const { generarToken } = require("../../utils/jwt");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.json(error);
  }
};

const register = async (req, res) => {

  try {
    const { email, password, nombre, apellido, role } = req.body;

    if (!email || !password || !nombre || !apellido || !role ) {
      return res
        .status(400)
        .json({ success: false, message: "Todos los campos son requeridos" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "El formato del correo electrónico no es válido",
      });
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "La contraseña no cumple con los criterios de seguridad",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userBody = new User({
      email,
      password: hashedPassword,
      nombre,
      apellido,
      role,
    });

    const createdUser = await userBody.save();
    console.log(createdUser);
    const userId = createdUser._id;

    return res.status(201).json({
      success: true,
      message: "Usuario registrado con éxito",
      data: createdUser,
    });
  } catch (error) {
    console.error("Error en el registro:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const userDB = await validateEmailDB(userInfo.email);
    if (!userDB) {
      return res.json({ succes: false, message: "Email no existe" });
    }
    if (!bcrypt.compareSync(userInfo.password, userDB.password)) {
      return res.json({ succes: false, message: "La contraseña no coincide" });
    }
    console.log(userInfo.role);

    const token = generarToken(userDB._id, userDB.email);
    return res.json({
      succes: true,
      message: "Esta ok",
      token: token,
      userInfo: userDB,
    });
  } catch (error) {
    console.error("Error en el login:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

const profile = async (req, res) => {
  try {
    console.log(req.userProfile);
    return res.status(200).json(req.userProfile);
  } catch (error) {}
};
const getUserById = async (req, res) => {
  try {
    const  id  = req.params.id;
    console.log("ide de getbyID"+id);
    const userID = await User.findById( id );
    console.log(userID);

    return res.status(200).json(userID); 
  } catch {
    return res.json(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Este usuario no existe" });
    }
    return res.status(200).json(deletedUser);
  } catch (error) {}


};
const putUser = async (req, res) => {
  try {
    
    const { id } = req.params;
    const userBody = new User(req.body);
    userBody._id = id;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      userBody,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Este usuario no existe" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {}
};
module.exports = { register, login, profile, getUser, getUserById,deleteUser, putUser };