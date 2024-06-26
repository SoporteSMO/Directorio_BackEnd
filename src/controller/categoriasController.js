import { Categorias } from "../models/index.js";
const listarCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.findAll({
            where: { estado: true },
        });
        if (categorias.length === 0) {
            const error = new Error("No tienes categorias registradas");
            return res.status(404).json({ msg: error.message });
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener las categorias" });
    }
};

export { listarCategorias };
