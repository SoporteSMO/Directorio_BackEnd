import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Teatro = db.define("teatro", {
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
    horarios: {
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

export default Teatro;
