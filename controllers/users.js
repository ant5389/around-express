const User = require('../models/user.js');

const getUsers = (req, res) => {
  return User.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send(err));
};

const getProfile = (req, res) => {
  return User.find({ _id: req.params._id })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User ID not found' });
      }

      return res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
};

const createProfile = (req, res) => {
  return User.countDocuments({})
    .then(_id => {
      return User.create({ ...req.body, _id })
        .then(user => {
          res.status(200).send(user);
        })
        .catch((err) => res.status(400).send(err));
    });
};

module.exports = { getUsers, getProfile, createProfile };
