import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Plantas = db.define("plantas", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
});

export default Plantas
