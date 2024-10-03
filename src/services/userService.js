// src/services/userService.js
const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');

async function registerUser(email, name, password) {
    try {
        const hasedPassword = await bcrypt.hash(password, 10);
        return await userRepository.createUser(email, nome, hasedPassword);
    } catch (error) {
        throw error;
    }
}

async function authenticateUser(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if(!user) {
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);

    return isMatch ? user : null;
}

async function getUserById(id) {

}

module.exports = {
    registerUser,
    authenticateUser,
    getUserById
};
