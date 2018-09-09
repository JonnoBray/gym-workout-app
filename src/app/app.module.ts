import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { AddNewWorkoutComponent } from './add-new-workout/add-new-workout.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, ROUTES} from './app-routing/app-routing.module';
import { DeleteOneComponent } from './delete-one/delete-one.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkoutplanComponent,
    AddNewWorkoutComponent,
    HomeComponent,
    DeleteOneComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES), AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
