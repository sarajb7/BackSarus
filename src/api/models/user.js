const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user"] },
}, {
    collection: "user",
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
});


const User = mongoose.model("user", userSchema)
module.exports = User;
