import { Eventos } from "../models/index.js";
const listarEventos = async (req, res) => {
    try {
        const eventos = await Eventos.findAll({
            where: { estado: true },
        });
        if (eventos.length === 0) {
            const error = new Error("No tienes categorias registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(eventos);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener los eventos" });
    }
};

export { listarEventos };
