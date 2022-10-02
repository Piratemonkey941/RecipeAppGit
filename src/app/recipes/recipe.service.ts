import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list-new/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cherry Pie',
       'So Flakey, So sweet, So good',
        'https://www.thespruceeats.com/thmb/MbHAC6HNO7rjkZXA_GwHvbQ46EA=/2000x1500/smart/filters:no_upscale()/basic-cherry-pie-recipe-995136-14-dfe79487adf64a848a49dd07983b6614.jpg',
        [
          new Ingredient('Cherries', 20),
          new Ingredient('flour', 1),
          new Ingredient('shortning', 1),
          new Ingredient('sugar', 1),
        ]),

    new Recipe(
      'Pork Dumpling',
    'Best with rice',
    'https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    [
      new Ingredient('Ground Pork', 1),
      new Ingredient('dumpling wrappers', 20)
    ]),
   ];

   constructor(private slService: ShoppingListService) {

   }

getRecipes() {
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}


}


