export const createProductController = (req, res) => {
    const dados = req.body;
    res.json({
        message: 'Product has created successfully!',
        product: dados,
    });
};
