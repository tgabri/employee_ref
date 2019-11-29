const userRouter = require('express').Router();
const {
  getUsers,
  addUser,
  removeUser
} = require('../controllers/userController');

userRouter
  .route('/')
  .get(getUsers)
  .post(addUser);

userRouter.route('/:id').delete(removeUser);

module.exports = userRouter;
