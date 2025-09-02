export const getByIdProfileController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Dados do perfil com o id ${id} foi adquirido com sucesso!`,
    });
};
