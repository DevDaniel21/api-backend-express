export const deleteProfileController = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Profile with id:${id} has deleted successfully!` });
};
