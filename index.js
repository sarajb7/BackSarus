const express = require("express");
const {connect} = require("./src/utils/database");

const userRoutes = require("./src/api/routes/user.routes");
const juegosRoutes = require("./src/api/routes/videojuegos.routes")

const env = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

env.config();

const PORT = 5000;

connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user", userRoutes)
app.use("/juegos", juegosRoutes)

app.listen(PORT, ()=> console.log(`listening in the port http://localhost:${PORT}`))
