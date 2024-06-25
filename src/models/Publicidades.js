import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Publicidades = db.define("publicidades", {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    media: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        require: true,
    },
    fechaFin: {
        type: DataTypes.DATE,
        require: true,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default Publicidades;
