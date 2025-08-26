export const createProfileController = (req, res) => {
    const dados = req.body;
    res.json({
        message: 'Profile has created successfully!',
        profile: dados,
    });
};
