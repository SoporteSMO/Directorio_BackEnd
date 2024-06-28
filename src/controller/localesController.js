import { Locales } from "../models/index.js";
const listarLocalesOrdenAlfabetico = async (req, res) => {
    try {
        const locales = await Locales.findAll({
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

export { listarLocalesOrdenAlfabetico };
