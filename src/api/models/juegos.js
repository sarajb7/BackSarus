const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const juegosSchema = new Schema(
  {
    nombre: { type: String, required: true },
    foto: { type: String, required: false },
    comentarios: { type: String, required: true },
    archivo: {type: String, required: true}
  },
  {
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Juegos = mongoose.model("juego", juegosSchema)

module.exports = Juegos;
