import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "rajpal";
  oddnumbers = [1,3,5];
  evennumbers = [2,4,6,8,10];
  onlyodd = false;
}
