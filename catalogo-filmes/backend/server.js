require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const filmeRoutes = require("./routes/filmeRoutes");

app.use("/filmes", filmeRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});