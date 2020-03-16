import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import {AppComponent} from "../../app.component";
import { usersRoutes } from "./users.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  providers: [],
  declarations: [
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  bootstrap: [UserIndexComponent]
})
export class UsersModule { }
