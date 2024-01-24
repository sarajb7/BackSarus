const Juegos = require("../models/juegos");

const getJuegos = async (req, res) => {
  try {
    const allJuegos = await Juegos.find();

    return res.status(200).json(allJuegos);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const getJuegoById = async (req, res) => {
  try {
    const { id } = req.params;
    const juegoID = await Juegos.findOne({ _id: id });

    return res.status(200).json(juegoID); 
  } catch {
    return res.json(error);
  }
};
const createJuego = async (req, res) => {
  try {
    const newJuego = new Juegos(req.body);
    const createdJuego = await newJuego.save();

    return res.status(201).json(createdJuego);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const editJuego = async (req, res) => {
  try {
    const { id } = req.params;
    const juegoBody = new Juegos(req.body);
    juegoBody._id = id;

    const updatedJuego = await Juegos.findByIdAndUpdate(id, juegoBody, 
      { new: true }
      );

    return res.status(200).json(updatedJuego);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteJuego = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteJuego = await Juegos.findByIdAndDelete(id);
        
        return res.status(200).json(deleteJuego)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getJuegos, getJuegoById, createJuego , editJuego, deleteJuego};
