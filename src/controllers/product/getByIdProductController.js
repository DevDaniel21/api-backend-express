import { getById } from '../../models/productModel.js';

export const getByIdProductController = async (req, res) => {
    const id = req.params.id;

    const result = await getById(+id);

    res.json({
        message: `Dados do produto com id:${id} foram obtidos com sucesso!`,
        product: result,
    });
};
