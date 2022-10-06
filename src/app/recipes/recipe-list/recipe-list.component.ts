import { Component, OnInit, } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {



    recipes: Recipe[];

      constructor(private recipeService: RecipeService,
                  private router: Router,
                  private route: ActivatedRoute) { }

      ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
      }

      onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
      }

}
// recipes: Recipe[] = [
//   new Recipe('test recipe', 'this is a test', 'https://www.thespruceeats.com/thmb/MbHAC6HNO7rjkZXA_GwHvbQ46EA=/2000x1500/smart/filters:no_upscale()/basic-cherry-pie-recipe-995136-14-dfe79487adf64a848a49dd07983b6614.jpg'),

//   new Recipe('test recipe', 'this is a test', 'https://www.thespruceeats.com/thmb/MbHAC6HNO7rjkZXA_GwHvbQ46EA=/2000x1500/smart/filters:no_upscale()/basic-cherry-pie-recipe-995136-14-dfe79487adf64a848a49dd07983b6614.jpg'),
//  ];
