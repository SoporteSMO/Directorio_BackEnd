import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Multicines = db.define("multicines", {
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
    horarios2d: {
        type: DataTypes.TEXT,
    },
    horarios3d: {
        type: DataTypes.TEXT,
    },
    sinopsis: {
        type: DataTypes.TEXT,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Multicines;
