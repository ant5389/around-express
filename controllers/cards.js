const Card = require('../models/card.js');

const getCards = (req, res) => {
  return Card.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send(err));
};

const createCard = (req, res) => {
  Card.create({ name: req.body.name, link: req.body.link })
    .then(user => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

const deleteCard = (req, res) => {
  Card.remove()
    .then(user => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

const likeCard = (req, res) => {

};

const dislikeCard = (req, res) => {

};

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
};

module.exports.likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
);

module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
);

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard
};
