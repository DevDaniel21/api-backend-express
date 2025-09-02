import { list } from '../../models/profileModel.js';

export const listProfileController = async (req, res) => {
    const result = await list();

    res.json({ 
        message: 'Lista de perfis adquiridas com sucesso!',
        profiles: result 
    });
};
