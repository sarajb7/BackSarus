const Tutoriales = require("../models/tutoriales");

const getTutoriales = async (req, res) => {
  try {
    const allTutoriales = await Tutoriales.find();

    return res.status(200).json(allTutoriales);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const getTutorialById = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialID = await Tutoriales.findOne({ _id: id });

    return res.status(200).json(tutorialID); 
  } catch {
    return res.json(error);
  }
};
const createTutorial = async (req, res) => {
  try {
    const newTutorial = new Tutoriales(req.body);
    const createdTutorial = await newTutorial.save();

    return res.status(201).json(createdTutorial);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const editTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorialBody = new Tutoriales(req.body);
    tutorialBody._id = id;

    const updatedTutorial = await Tutoriales.findByIdAndUpdate(id, tutorialBody, 
      { new: true }
      );

    return res.status(200).json(updatedTutorial);

  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteTutorial = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteTutorial = await Tutoriales.findByIdAndDelete(id);
        
        return res.status(200).json(deleteTutorial)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getTutoriales, getTutorialById, createTutorial , editTutorial, deleteTutorial };