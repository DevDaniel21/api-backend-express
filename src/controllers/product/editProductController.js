export const editProductController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Product with id:${id} has updated successfully!`,
        product: dados,
    });
};
