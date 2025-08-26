export const deleteProductController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Product with id:${id} has deleted successfully!` });
};
