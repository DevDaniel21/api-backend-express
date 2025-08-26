export const editCustomerController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Customer with id:${id} has updated successfully!`,
        customer: dados,
    });
};
