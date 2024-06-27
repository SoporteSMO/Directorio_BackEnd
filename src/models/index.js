import Categorias from "./Categorias.js";
import Plantas from "./Plantas.js";
import Locales from "./Locales.js";
import Publicidades from "./Publicidades.js";
import Vias from "./Vias.js";
import Eventos from "./Eventos.js";
import Multicines from "./Multicines.js";
import Teatro from "./Teatro.js";

//Relacion entre Categorias y Locales
Categorias.hasMany(Locales, {
    foreignKey: { name: "id_Categoria" },
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});
Locales.belongsTo(Categorias, {
    foreignKey: { name: "id_Categoria" },
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});

//Relacion entre Plantas y Locales
Plantas.hasMany(Locales, {
    foreignKey: { name: "id_Planta" },
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});
Locales.belongsTo(Plantas, {
    foreignKey: { name: "id_Planta" },
    onDelete: "SET NULL",
    onUpdate: "SET NULL ",
});

export {
    Categorias,
    Plantas,
    Locales,
    Publicidades,
    Vias,
    Eventos,
    Multicines,
    Teatro,
};
