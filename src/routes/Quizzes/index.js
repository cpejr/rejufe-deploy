const express = require('express');
const QuizzesRouter = express.Router();

const QuizzesController = require('../../controllers/QuizzesController.jsx');

const { authenticateToken } = require('../../middlewares/authentication');

QuizzesRouter.get(
  '/',
  QuizzesController.getAll
);
QuizzesRouter.get(
  '/:id',
  QuizzesController.getById
);
QuizzesRouter.post(
  '/',
  QuizzesController.create
);
QuizzesRouter.put(
  '/:id',
  QuizzesController.update
);
QuizzesRouter.delete(
  '/:id',
  QuizzesController.delete
);

module.exports = QuizzesRouter