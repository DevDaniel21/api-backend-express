import { list } from '../../models/productModel.js';

export const listProductController = async (req, res) => {
    const result = await list();

    res.json({
        message: 'Lista de produtos obtida com sucesso!',
        products: result,
    });
};
