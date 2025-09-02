export const getByIdCustomerController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Dados do cliente com id:${id} foram obtidos com sucesso!`,
    });
};
