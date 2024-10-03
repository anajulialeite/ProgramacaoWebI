// src/repository/userRepository.js
const db = require('../database/database');

function createUser(email, name, password) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (email, name, password) VALUES (?, ?, ?)';
        db.run(query, [email, name, password], function (err) {
            if (err) {
                console.log(`error: ${err}`)
                reject(err)
            }
            else resolve({ id: this.lastID });
        });
    });
}

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

function findUserById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, email, name FROM users WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

module.exports = {
    createUser,
    findUserByEmail,
    findUserById
};
