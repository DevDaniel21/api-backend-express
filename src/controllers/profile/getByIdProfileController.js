export const getByIdProfileController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data of profile with id:${id} has been taken successfully!`,
    });
};
