export const deleteCustomerController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Customer with id:${id} has deleted successfully!` });
};
