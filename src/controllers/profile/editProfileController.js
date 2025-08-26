export const editProfileController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `Profile with id:${id} has updated successfully!`,
        profile: dados,
    });
};
