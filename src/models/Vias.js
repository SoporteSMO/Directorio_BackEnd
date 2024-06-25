import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Vias = db.define("vias", {
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
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default  Vias ;
