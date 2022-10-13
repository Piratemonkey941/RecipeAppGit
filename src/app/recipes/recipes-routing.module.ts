import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeDetailComponent } from "src/prj-basics-final/src/app/recipes/recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";


const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        {
          path: ':id',
          component: RecipeDetailComponent,
          resolve: [RecipeResolverService]
        },

        {
          path: ':id/edit',
          component: RecipeEditComponent,
          resolve: [RecipeResolverService]
        },
      ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class RecipesRoutingModule {}



