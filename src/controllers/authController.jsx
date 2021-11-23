const express = require('express');

const User = require('../models/Usuario');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body); // cria um novo usuario ao chamar a rota
        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registar usuário' });
    }
});

module.exports = app => app.use('/auth', router);

// Só criei o controller do usuário!