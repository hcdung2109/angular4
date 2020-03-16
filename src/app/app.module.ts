import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UsersModule } from './modules/users/users.module';
import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { ExampleServiceComponent } from './example-service/example-service.component';
import {HelpersService} from './services/helpers.service';
import { ExampleRoutingComponent } from './example-routing/example-routing.component';
import { HeaderComponent } from './header/header.component';
import { ExampleLodashComponent } from './example-lodash/example-lodash.component';
import { ExampleTemplateVariableComponent } from './example-template-variable/example-template-variable.component';
import { ExampleLifecycleComponent } from './example-lifecycle/example-lifecycle.component';
import { ExampleLifecycleChildComponent } from './example-lifecycle-child/example-lifecycle-child.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    ExamplePipeComponent,
    RoundNumberPipe,
    ExampleServiceComponent,
    ExampleRoutingComponent,
    HeaderComponent,
    ExampleLodashComponent,
    ExampleTemplateVariableComponent,
    ExampleLifecycleComponent,
    ExampleLifecycleChildComponent,
    NotfoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ // khai bao cac service
    HelpersService
  ],
  bootstrap: [AppComponent] // noi khao bao component chay dau tien
})
export class AppModule { }
