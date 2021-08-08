const path = require('path');

const Card = require(path.join(__dirname, '../models/card'));
const BadRequestError = require('../errors/BadRequestError'); // 400
const ForbiddenError = require('../errors/ForbiddenError'); // 403
const NotFoundError = require('../errors/NotFoundError'); // 404

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

module.exports.deleteCardById = (req, res, next) => {
  const thisCard = req.params.cardId;
  Card.findById(thisCard)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Запрашиваемая карточка не найдена');
      } else if (card.owner.toString() === req.user._id) {
        Card.findByIdAndRemove(thisCard)
          .then(() => res.send({ message: 'Карточка удалена!' }))
          .catch(next);
      } else {
        throw new ForbiddenError('Нет прав на удаление данной карточки');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Некорректный запрос');
      }
      next(err);
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .orFail(new Error('NotFoundError'))
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message === 'NotFoundError') {
        throw new NotFoundError('Запрашиваемая карточка не найдена');
      } else if (err.name === 'CastError') {
        throw new BadRequestError('Некорректный запрос');
      }
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .orFail(new Error('NotFoundError'))
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message === 'NotFoundError') {
        throw new NotFoundError('Запрашиваемая карточка не найдена');
      } else if (err.name === 'CastError') {
        throw new BadRequestError('Некорректный запрос');
      }
    })
    .catch(next);
};
