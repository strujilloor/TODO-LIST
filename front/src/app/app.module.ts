import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskListCreatorComponent } from './components/shared/task-list-creator/task-list-creator.component';
import { TaskListComponent } from './components/shared/task-list/task-list.component';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListCreatorComponent,
    TaskListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
