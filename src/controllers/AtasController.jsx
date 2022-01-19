const Atas = require('../models/Atas.jsx');

module.exports = {
    async getAll(req, res) {
        try {
            const atas = await Atas.find();
            res.json(atas)
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to get all atas',
            });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const atas = await Atas.findOne({ _id: id });
            res.json(atas)
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to get an atas by id',
            });
        }
    },

    async create(req, res) {
        try {
            const atas = req.body;
            await Atas.create(atas);
            res.json(atas)
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to create an atas',
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const atas = await Atas.findByIdAndDelete({ _id: id });
            res.json(atas)
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification: 'Internal server error while trying to delete an atas',
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const atas = req.body
            const result = await Atas.findByIdAndUpdate({ _id: id }, atas);
            res.json(result)
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({
                notification:
                    'Internal server error while trying to update an atas by id',
            });
        }
    }
}