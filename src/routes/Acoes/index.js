const express = require('express');
const ActionsRouter = express.Router();

const ActionsController = require('../../controllers/AcoesController.jsx');
const ActionsValidator = require('../../validators/AcoesValidator.js')

const { authenticateToken } = require('../../middlewares/authentication');

ActionsRouter.get(
    '/',
    ActionsController.getAll
);
ActionsRouter.get(
    '/:id',
    ActionsValidator.getById,
    ActionsController.getById
);
ActionsRouter.post(
    '/',
    ActionsValidator.create,
    ActionsController.create
);
ActionsRouter.put(
    '/:id',
    ActionsValidator.update,
    ActionsController.update
);
ActionsRouter.delete(
    '/:id',
    ActionsValidator.delete,
    ActionsController.delete
);

module.exports = ActionsRouter;