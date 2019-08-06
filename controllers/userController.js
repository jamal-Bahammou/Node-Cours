const fs = require('fs');

// 👪 👪 👪 Read the list of Users from json file: --------------------
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

// 👪 GET all Users: --------------------------------------------
exports.getAllUsers = (req, res) => {
  res.status(400).json({
    status: 'success ✔️',
    message: 'This is the list of users 👪'
  });
};

// 👪 GET single User: --------------------------------------------
exports.getSingleUser = (req, res) => {
  res.status(400).json({
    status: 'success ✔️',
    message: 'This is the list of users 👪'
  });
};

// 👪 POST a new user: --------------------------------------------
exports.createUser = (req, res) => {
  res.status(400).json({
    status: 'success ✔️',
    message: 'This is the list of users 👪'
  });
};

// 👪 PATCH apdate a user: --------------------------------------------
exports.updateUser = (req, res) => {
  res.status(400).json({
    status: 'success ✔️',
    message: 'This is the list of users 👪'
  });
};

// 👪 DELETE a user: --------------------------------------------
exports.deleteUser = (req, res) => {
  res.status(400).json({
    status: 'success ✔️',
    message: 'This is the list of users 👪'
  });
};
