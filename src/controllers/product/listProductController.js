export const listProductController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Lista de produtos obtida com sucesso!`,
    });
};
