import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Categorias = db.define("categorias", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Categorias;
