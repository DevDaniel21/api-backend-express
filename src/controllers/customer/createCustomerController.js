export const createCustomerController = (req, res) => {
    const dados = req.body;
    res.json({
        message: 'Customer has created successfully!',
        customer: dados,
    });
};
