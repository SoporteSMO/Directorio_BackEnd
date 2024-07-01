import { Locales, Plantas } from "../models/index.js";
const listarLocalesOrdenAlfabetico = async (req, res) => {
    try {
        const locales = await Locales.findAll({
            include: [
                {
                    model: Plantas,
                },
            ],
            where: { estado: true },
            order: [["nombre", "ASC"]],
        });
        console.log(locales);
        if (locales.length === 0) {
            const error = new Error("No tienes locales registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(locales);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener los locales" });
    }
};

const localesCategorias = async (req, res) => {
    const { id } = req.params;
    try {
        const locales = await Locales.findAll({
            where: { id_Categoria: id },
            order: [["nombre", "ASC"]],
        });
        console.log(locales);
        if (locales.length === 0) {
            const error = new Error("No tienes locales de esa categoria");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(locales);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener los locales" });
    }
};
const localesPlantas = async (req, res) => {
    const { id } = req.params;
    try {
        const locales = await Locales.findAll({
            where: { id_Planta: id },
            order: [["nombre", "ASC"]],
        });
        console.log(locales);
        if (locales.length === 0) {
            const error = new Error("No existe el nivel");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(locales);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener los locales" });
    }
};

export { listarLocalesOrdenAlfabetico, localesCategorias, localesPlantas };
