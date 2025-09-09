import { remove } from '../../models/productModel.js';

export const deleteProductController = async (req, res) => {
    const id = req.params.id;

    const result = await remove(+id);

    res.json({ 
        message: `Produto com id:${id} foi excluído com sucesso!`,
        profile: result
    });
};
