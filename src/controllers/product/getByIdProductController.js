export const getByIdProductController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Dados do produto com id:${id} foram obtidos com sucesso!`,
    });
};
