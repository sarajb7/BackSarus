const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorialSchema = new Schema(
  {
    titulo: { type: String, required: true },
    video: { type: String, required: true },
    comentarios: [{ type: String, required: false }],
  },
  {
    collection: "tutorial",
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Tutoriales = mongoose.model("tutorial", tutorialSchema)

module.exports = Tutoriales;