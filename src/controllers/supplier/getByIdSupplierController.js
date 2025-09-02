export const getByIdSupplierController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Dados do fornecedor com id:${id} foram obtidos com sucesso!`,
    });
};
