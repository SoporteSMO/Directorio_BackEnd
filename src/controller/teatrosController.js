import { Teatro } from "../models/index.js";
const listarTeatros = async (req, res) => {
    try {
        const obras = await Teatro.findAll({
            where: { estado: true },
        });
        if (obras.length === 0) {
            const error = new Error("No tienes obras registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(obras);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener los obras" });
    }
};

export { listarTeatros };
