const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const juegoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    foto: { type: String, required: false },
    comentarios: { type: String, required: true },
    archivo: {type: String, required: true}
  },
  {
    collection: "juegos",
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Juegos = mongoose.model("juego", juegoSchema)

module.exports = Juegos;
