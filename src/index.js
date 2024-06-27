import express from "express";
import db from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import publicidadRouter from "./routes/publicidadesRouter.js";
import viasRouter from "./routes/viasRouter.js";
import categoriasRouter from "./routes/categoriasRouter.js";
import plantasRouter from "./routes/plantasRouter.js";
import localesRouter from "./routes/localesRouter.js";
import eventosRouter from "./routes/eventosRouter.js";
import multicinesRouter from "./routes/multicinesRouter.js";
import teatroRouter from "./routes/teatrosRouter.js";

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
//Routing para publicidad
app.use("/api/publicidad", publicidadRouter);
//Routing para vias
app.use("/api/vias", viasRouter);
//Routing para categorias
app.use("/api/categorias", categoriasRouter);
//Routing para plantas
app.use("/api/plantas", plantasRouter);
//Routing para locales
app.use("/api/locales", localesRouter);
//Routing para eventos
app.use("/api/eventos", eventosRouter);
//Routing para multicines
app.use("/api/multicines", multicinesRouter);
//Routing para eventos
app.use("/api/teatro", teatroRouter);

const port = process.env.BD_PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor operativo en el puerto ${port}`);
});
