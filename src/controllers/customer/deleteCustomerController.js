export const deleteCustomerController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Cliente com id:${id} foi excluído com sucesso!` });
};
