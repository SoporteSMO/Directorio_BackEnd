import express from "express";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
//para poder enviar respuestas tipo json
app.use(express.json());

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

const port = process.env.BD_PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
