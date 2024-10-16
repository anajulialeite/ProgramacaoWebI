// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
        const tolken = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, "secret")
        req.userData = decoded; //estou adicionando mais um item na minha requisição
        next(); //apartir daqui ele continua
        //Bearer: ele passa coisas aleatórias
        //depois um array do Bearer com coisas aleatórias com a posição 1
    } catch (error) {
        return res.status(401).send({ mensagem: "Falha na autenticação!" })
    }
};

module.exports = auth;
