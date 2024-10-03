// src/database/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log("banco de dados criado")
    }
});

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, name TEXT, password TEXT)", (err) => {
        if (err) {
            console.error('Failed to create table ' + err.message);
        } else {
            console.log('Table is created or already exists.');
        }
    });
});

module.exports = db;
