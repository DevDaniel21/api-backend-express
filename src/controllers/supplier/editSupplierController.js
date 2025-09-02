export const editSupplierController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Fornecedor com id:${id} foi atualizado com sucesso!`,
        supplier: dados,
    });
};
