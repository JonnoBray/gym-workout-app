import { NgModule } from '@angular/core';
import {AddNewWorkoutComponent} from '../add-new-workout/add-new-workout.component';
import {HomeComponent} from '../home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {DeleteOneComponent} from '../delete-one/delete-one.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'newWorkout', component: AddNewWorkoutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'delete', component: DeleteOneComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
