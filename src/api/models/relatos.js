const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const relatoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    texto: { type: String, required: true },
    autor: {type: String, requiered: true},
    comentarios: [{ type: String, required: false }],
  },
  {
    collection: "relatos",
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Relatos = mongoose.model("relato", relatoSchema)

module.exports = Relatos;
