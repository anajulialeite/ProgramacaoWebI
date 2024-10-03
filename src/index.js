// src/index.js
const express = require("express");
const cors = require("cors");
const userController = require('./controllers/userController');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.post("/register", userController.register);
app.post("/login", userController.login);
app.get("/perfil", authMiddleware, userController.getProfile);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
// executar npm install

// executar npm run dev ou node ./src/index.js
