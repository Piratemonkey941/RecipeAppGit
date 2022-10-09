import { Component, OnInit } from '@angular/core';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}







// import { Recipe } from './recipe.model';
// selectedRecipe: Recipe;
// constructor(private recipeService: RecipeService) { }
  // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
