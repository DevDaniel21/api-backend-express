export const listProductController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data of products has been taken successfully!`,
    });
};
