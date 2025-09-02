export const deleteProductController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Produto com id:${id} foi excluído com sucesso!` });
};
