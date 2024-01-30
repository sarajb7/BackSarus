// import {v2 as cloudinary} from 'cloudinary';

const cloudinary = require('cloudinary').v2;


const express = require("express");
const {connect} = require("./src/utils/database");



const relatosRoutes = require("./src/api/routes/relatos");
const juegosRoutes = require("./src/api/routes/juegos");
const userRoutes = require("./src/api/routes/user");
const tutorialesRoutes = require("./src/api/routes/tutoriales");


const env = require("dotenv");
const app = express();


env.config();

const PORT = 5000;

connect();


          
cloudinary.config({ 
  cloud_name: 'dhazkcoxg', 
  api_key: '863852145224523', 
  api_secret: '***************************' 
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/relatos", relatosRoutes)
app.use("/juegos", juegosRoutes)
app.use("/tutoriales", tutorialesRoutes)
app.use("/user", userRoutes)

app.listen(PORT, ()=> console.log(`listening in the port http://localhost:${PORT}`))
