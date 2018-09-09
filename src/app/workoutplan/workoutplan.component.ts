import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-workoutplan',
  templateUrl: './workoutplan.component.html',
  styleUrls: ['./workoutplan.component.css']
})
export class WorkoutplanComponent implements OnInit {
  public workouts = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
      const url = 'https://21vfoyiii8.execute-api.us-east-2.amazonaws.com/Prod';
      const me = this;
      this.http.get(url).toPromise().then(function(result: any) {
          me.workouts = result.items;

      }, function(error) {
        console.log(error);
      });
  }

}
