import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Locales = db.define("locales", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    fachada: {
        type: DataTypes.STRING,
        require: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    numLocal: {
        type: DataTypes.STRING,
        require: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Locales;
