import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/share.module";

import { ShoppingListComponent } from "./shopping-list-new.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { LoggingService } from "../logging.service";


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [

    FormsModule,
    RouterModule.forChild([

      { path: '', component: ShoppingListComponent },
    ]),
    SharedModule
  ],
  providers: [
    
  ]
})

export class ShoppingListModule {}
