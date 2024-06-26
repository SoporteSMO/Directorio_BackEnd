import { Plantas } from "../models/index.js";
const listarPlantas = async (req, res) => {
    try {
        const plantas = await Plantas.findAll({
            where: { estado: true },
        });
        console.log(plantas);
        if (plantas.length === 0) {
            const error = new Error("No tienes plantas registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(plantas);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener las plantas" });
    }
};

export { listarPlantas };
