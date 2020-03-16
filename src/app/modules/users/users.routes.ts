import {UserIndexComponent} from "./user-index/user-index.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {Routes} from "@angular/router";

export const usersRoutes: Routes = [
  {
    path: 'users',
    component: UserIndexComponent
  },
  {
    path: 'user',
    component: UserCreateComponent,
    children: [
      {
        path: 'create',
        component: UserCreateComponent
      },
      // {
      //   path: 'edit',
      //   loadChildren: './new-project/new-project.module#NewProjectModule',
      // }
    ]
  }
];
