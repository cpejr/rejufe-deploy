const User = require('../models/Usuario.jsx')

module.exports = {
    async create(req, res) {
        try {
            const user = req.body;
            await User.create(user);
            return res.status(200).json(user);
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to create a user',
            });
        }
    },
    async getAll(req, res) {
        try {
            const user = await User.find();
            return res.status(200).json(user);

        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to get all users',
            });
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findOne({ _id: id });
            return res.status(200).json(user);
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to get a user by id',
            });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const user = req.body
            const result = await User.findByIdAndUpdate({ _id: id }, user);
            return res.status(200).json(result);
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification:
                    'Internal server error while trying to update a user by id',
            });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete({ _id: id });
            return res.status(200).json({id: user.id});
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to delete a user',
            });
        }
    }
}