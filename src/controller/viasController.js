import { Vias } from "../models/index.js";

const listarVias = async (req, res) => {
    try {
        const vias = await Vias.findAll({
            where: { estado: true },
        });
        console.log(vias);
        if (vias.length === 0) {
            const error = new Error("No tienes vias registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(vias);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener las vias" });
    }
};

export { listarVias };
