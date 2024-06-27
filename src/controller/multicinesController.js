import { Multicines } from "../models/index.js";
const listarMulticines = async (req, res) => {
    try {
        const cartelera = await Multicines.findAll({
            where: { estado: true },
        });
        if (cartelera.length === 0) {
            const error = new Error("No tienes cartelera registrada");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(cartelera);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener la cartelera " });
    }
};

export { listarMulticines };
