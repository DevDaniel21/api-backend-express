export const getByIdCustomerController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data of customer with id:${id} has been taken successfully!`,
    });
};
