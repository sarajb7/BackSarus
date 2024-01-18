const mongoose = require("mongoose");

// const DB_URL = "mongodb+srv://jesussavi88:c4gqeRc1eqvtm0ki@firstdb.puitvqs.mongodb.net/pruebaTecnica?retryWrites=true&w=majority";

const connect = async() => {
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const {name,host} = db.connection;
        console.log(`Connected to ${name} DB in host:${host}`);

    } catch (error) {
        
        console.log("i have a error",error);
    }
}

module.exports = {connect};