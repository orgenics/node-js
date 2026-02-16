const express = require('express');
const { registerAdmin, loginAdmin } = require('../controller/auth.controller');
const uploadImage = require('../middleware/uploadImage');

const routes = express.Router();

routes.post("/register", uploadImage.single('adminImage'), registerAdmin);
routes.post("/login", loginAdmin);

routes.use("/recipe", require('./recipe.routes'));
routes.use("/commit", require('./commit.routes'));

module.exports = routes;


//"adminToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjk5MmI4YzJlZGIzZjlkNDQxNWVjNzkyIiwiaWF0IjoxNzcxMjIzMzUxfQ.eopWCIiVInJqG8I4Dr3EXVv8etJiVvP25YZQm-sdCok"