const express = require('express');
const adminToken = require('../middleware/tokenVerify');
const { addRecipe, getAllRecipe, deleteRecipe, updateRecipe, singleViewRecipe } = require('../controller/recipe.controller');
const uploadImage = require('../middleware/uploadImage');

const routes = express.Router();

routes.post("/add-recipe", adminToken, uploadImage.single('recipeImage'), addRecipe);

routes.get("/", getAllRecipe);

routes.get("/recipe-singleview/:id", adminToken, singleViewRecipe);

routes.delete("/delete-recipe/:id", adminToken, uploadImage.single('recipeImage'), deleteRecipe);

routes.put("/update-recipe/:id", adminToken, uploadImage.single('recipeImage'), updateRecipe); 

module.exports = routes;



