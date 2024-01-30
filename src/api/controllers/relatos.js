const Relatos = require("../models/relatos");

const getRelato = async (req, res) => {
  try {
    const allRelatos = await Relatos.find();

    return res.status(200).json(allRelatos);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const getRelatoById = async (req, res) => {
  try {
    const { id } = req.params;
    const relatoID = await Relatos.findOne({ _id: id });

    return res.status(200).json(relatoID); 
  } catch {
    return res.json(error);
  }
};
const createRelato = async (req, res) => {
  try {
    const newRelato = new Relatos(req.body);
    const createdRelato = await newRelato.save();

    return res.status(201).json(createdRelato);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const editRelato = async (req, res) => {
  try {
    const { id } = req.params;
    const relatoBody = new Relatos(req.body);
    relatoBody._id = id;

    const updatedRelato = await Relatos.findByIdAndUpdate(id, relatoBody, 
      { new: true }
      );

    return res.status(200).json(updatedRelato);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteRelato = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteRelato = await Relatos.findByIdAndDelete(id);
        
        return res.status(200).json(deleteRelato)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getRelato, getRelatoById, createRelato , editRelato, deleteRelato};