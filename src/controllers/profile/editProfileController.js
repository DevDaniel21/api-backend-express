export const editProfileController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Perfil com id ${id} foi atualizado com sucesso!`,
        profile: dados,
    });
};
