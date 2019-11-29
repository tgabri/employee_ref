const User = require('../data/models/User');

exports.selectUsers = () => {
  return User.find()
    .sort({ name: 1 })
    .then(users => users);
};

exports.createUser = (username, name, company, position) => {
  const newUser = new User({
    username,
    name,
    company,
    position
  });
  return newUser.save().then(user => user);
};

exports.deleteUser = id => {
  return User.findById(id).then(user => user.remove());
};
