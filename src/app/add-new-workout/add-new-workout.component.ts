import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workout} from '../workout';

@Component({
  selector: 'app-add-new-workout',
  templateUrl: './add-new-workout.component.html',
  styleUrls: ['./add-new-workout.component.css']
})
export class AddNewWorkoutComponent implements OnInit {

    constructor(private http: HttpClient) {}
    public model = new Workout('', 0, 'kg', 0);
    public submitted = false;

    onSubmit() {
        // for posting to AWS MongoDB
        const url = 'https://21vfoyiii8.execute-api.us-east-2.amazonaws.com/Prod';
        const body = JSON.stringify((this.model));
        this.http.post(url, body).toPromise().then(function (result: any) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
        this.submitted = true;
    }

    ngOnInit() {
    }

}
