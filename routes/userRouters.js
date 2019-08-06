const fs = require('fs');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser
} = userController;

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
