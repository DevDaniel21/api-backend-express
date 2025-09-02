export const deleteSupplierController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Fornecedor com id:${id} foi excluído com sucesso!` });
};
