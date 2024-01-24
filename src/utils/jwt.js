const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "cosarandom");
}

const generarToken = (id, email) => {
    return jwt.sign({id, email}, "cosarandom", {expiresIn: '1h'})
}


module.exports = { verifyToken, generarToken }