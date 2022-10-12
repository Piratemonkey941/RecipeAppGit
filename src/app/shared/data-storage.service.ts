import { Injectable } from "@angular/core";
import { HttpClientModule, HttpParams, } from "@angular/common/http"
import { HttpClient, } from "@angular/common/http"
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})

export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes(recipe: Recipe[]) {
    const recipes = this.recipeService.getRecipes();
     this.http
     .put(
      'https://ng-recipe-book-2f9da-default-rtdb.firebaseio.com/recipes.json'
      , recipes
      )
      .subscribe(response => {
        console.log(response);
      });

  }

//=========================================================

  fetchRecipes() {

        return this.http.get<Recipe[]>(
          'https://ng-recipe-book-2f9da-default-rtdb.firebaseio.com/recipes.json',

          )
          .pipe(map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
              }
            });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })

      );
    }
  }








  // return this.authService.user.pipe(
  //   take(1),
  //   exhaustMap(user => {

// .pipe(map(recipes => {
//   return recipes.map(recipe => {
//     return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
//   });
// }),
// tap(recipes => {
//   this.recipeService.setRecipes(recipes);
// })

// )

