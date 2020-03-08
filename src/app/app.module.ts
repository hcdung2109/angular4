import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { ExampleServiceComponent } from './example-service/example-service.component';
import {HelpersService} from './services/helpers.service';
import { ExampleRoutingComponent } from './example-routing/example-routing.component';

const appRoutes: Routes = [
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    ExamplePipeComponent,
    RoundNumberPipe,
    ExampleServiceComponent,
    ExampleRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
