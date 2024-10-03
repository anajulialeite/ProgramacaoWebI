// src/controllers/userController.js
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await userService.registerUser(email, nome, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({
            error: "Registration failed",
            details: error.message
        })
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userService.authenticateUser(email, password);
        if(!user){
            res.status(401).send({error: "Não autorizado!"});
        }
        const token = jwt.sign(
            {id: user.id, emai: user.email}, 
            "secret", 
            {expiresIn: "3h"}
        )
    } catch (error) {
        res.status(500).send({ error: "Falha no login!"});
    }
};

const getProfile = async (req, res) => {

};

module.exports = {
    register,
    login,
    getProfile
};
