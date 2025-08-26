export const getByIdProductController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data of product with id:${id} has been taken successfully!`,
    });
};
