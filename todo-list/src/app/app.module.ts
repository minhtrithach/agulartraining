import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbSidebarModule,NbInputModule,   NbCardModule, NbDatepickerModule, NbButtonModule, NbListModule, NbDialogModule,} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFeatureComponent } from './todo-feature/todo-feature.component';
import { TodoItemComponent } from './todo-feature/todo-item/todo-item.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TodoFeatureComponent,
    TodoItemComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDatepickerModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
