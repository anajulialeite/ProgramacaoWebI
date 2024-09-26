const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//get
app.get("/", (request, response) => {
    response.send({
        msg: "Olá Mundo!"
    })
})

//post
app.post("/data", (request, response) => {
    const {name, age} = resquest.body;
    response.send({
        msg: "A maldição foi quebrada!",
        data: {
            name,
            age
        }
    })
})

app.listen(port, () => {
    console.log(`servidor executado na porta: ${port}`);
})