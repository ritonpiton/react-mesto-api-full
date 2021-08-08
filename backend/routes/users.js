const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
// импортируем модель
const {
  getUsers, getUserById, getCurrentUserInfo, updateUserInfo, updateUserAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);

userRouter.get('/me', getCurrentUserInfo);
userRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
}), getUserById);

userRouter.patch('/me', updateUserInfo);
userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
}), updateUserAvatar);

module.exports = userRouter;
