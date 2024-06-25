import { exit } from "node:process";
import Publicidades from "../models/Publicidades.js";

import { publicidades } from "./publicidades.js";

import db from "../config/db.js";

const importarDatos = async () => {
    try {
        await db.authenticate();
        await db.sync();
        await Publicidades.bulkCreate(publicidades);
        console.log("Datos Importados correctamente");

        exit(0);
    } catch (error) {
        console.log();

        exit(1);
    }
};

const eliminarDatos = async () => {
    try {
        //Autenticar en la bdd
        await db.authenticate();

        //generar columnas
        await db.sync();
        await db.sync({ force: true });
        console.log("Datos Eliminados correctamente");
    } catch (error) {
        console.log(error);
        exit(1);
    }
};
if (process.argv[2] === "-i") {
    importarDatos();
}

if (process.argv[2] === "-d") {
    eliminarDatos();
}
