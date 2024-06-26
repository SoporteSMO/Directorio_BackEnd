import { Publicidades } from "../models/index.js";
const listarPublicidades = async (req, res) => {
    try {
        const publicidades = await Publicidades.findAll({
            where: { estado: true },
        });
        console.log(publicidades);
        if (publicidades.length === 0) {
            const error = new Error("No tienes publicidades registradas");
            return res.status(404).json({ msg: error.message });
        }
        return res.status(200).json(publicidades);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Error al obtener las publicidades" });
    }
};

export { listarPublicidades };
