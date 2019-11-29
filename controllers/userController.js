const { selectUsers, createUser, deleteUser } = require('../models/userModel');

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then(users => res.status(200).json(users))
    .catch(next);
};

exports.addUser = (req, res, next) => {
  const username = req.body.username;
  const name = req.body.name;
  const company = req.body.company;
  const position = req.body.position;

  createUser(username, name, company, position)
    .then(user => res.status(201).json(user))
    .catch(next);
};

exports.removeUser = (req, res, next) => {
  deleteUser(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
};
