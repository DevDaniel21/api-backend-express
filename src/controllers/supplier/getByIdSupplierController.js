export const getByIdSupplierController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data of supplier with id:${id} has been taken successfully!`,
    });
};
