export const editCustomerController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Cliente com id:${id} foi atualizado com sucesso!`,
        customer: dados,
    });
};
