import express from "express";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import publicidadRouter from "./routes/publicidadesRouter.js";

const app = express();
//para poder enviar respuestas tipo json
app.use(express.json());
app.use(express.static("./src/public"));

//conexion BDD
try {
    db.authenticate();
    db.sync();
    console.log(`Conexion exitosa a la BDD`);
} catch (error) {
    console.log("error en la base");
}

app.use(
    cors({
        origin: "*",
    })
);

//Routing
//Routing para usuarios
app.use("/publicidad", publicidadRouter);

const port = process.env.BD_PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
