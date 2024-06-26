import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Eventos = db.define("eventos", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Eventos;
