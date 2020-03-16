import {Routes} from "@angular/router";
import {Example1Component} from "./example1/example1.component";
import {Example2Component} from "./example2/example2.component";
import {Example3Component} from "./example3/example3.component";
import {ExamplePipeComponent} from "./example-pipe/example-pipe.component";
import {ExampleServiceComponent} from "./example-service/example-service.component";
import {ExampleLodashComponent} from "./example-lodash/example-lodash.component";
import {ExampleTemplateVariableComponent} from "./example-template-variable/example-template-variable.component";
import {ExampleLifecycleComponent} from "./example-lifecycle/example-lifecycle.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotfoundComponent} from "./notfound/notfound.component";

export const appRoutes: Routes = [
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  },
  {
    path: 'redirect',
    redirectTo: '/example2',  // redirect
    pathMatch: 'full'
  },
  {
    path: 'example1',
    component: Example1Component
  },
  {
    path: 'example2',
    component: Example2Component
  },
  {
    path: 'example3',
    component: Example3Component
  },
  {
    path: 'example-pipe',
    component: ExamplePipeComponent
  },
  {
    path: 'example-service',
    component: ExampleServiceComponent
  },
  {
    path: 'example-lodash',
    component: ExampleLodashComponent
  },
  {
    path: 'example-templ-variable',
    component: ExampleTemplateVariableComponent
  },
  {
    path: 'example-lifecycle',
    component: ExampleLifecycleComponent
  },
  {
    path: '**', // nếu ko tìm thấy
    component: NotfoundComponent
  }
];
