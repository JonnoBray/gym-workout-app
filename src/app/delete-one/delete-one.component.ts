import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-one',
  templateUrl: './delete-one.component.html',
  styleUrls: ['./delete-one.component.css']
})
export class DeleteOneComponent implements OnInit {
    private url = 'https://21vfoyiii8.execute-api.us-east-2.amazonaws.com/Prod';
    constructor(private http: HttpClient) {
    }
    public workouts = [];
    public model;


    onSubmit() {
        this.http.request('delete', this.url ).toPromise().then(function (result: any) {
            console.log(result);

        }, function (error) {
            console.log(error);
        });
    }

    ngOnInit() {

        const me = this;
        this.http.get(this.url).toPromise().then(function(result: any) {
            me.workouts = result.items;

        }, function(error) {
            console.log(error);

        });
    }
}
