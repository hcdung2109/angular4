import {UserIndexComponent} from "./user-index/user-index.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {Routes} from "@angular/router";
import {UserEditComponent} from "./user-edit/user-edit.component";

export const usersRoutes: Routes = [
  {
    path: 'user',
    component: UserIndexComponent,
    children: [
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: 'edit',
        component: UserEditComponent
      },
      // {
      //   path: 'edit',
      //   loadChildren: './new-project/new-project.module#NewProjectModule',
      // }
    ]
  }
];
