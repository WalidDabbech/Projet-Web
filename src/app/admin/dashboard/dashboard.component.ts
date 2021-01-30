import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Track: string;
  Nombre: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Track: "MEAN Stack", Nombre: 2},
  {Track: "Android", Nombre: 2},
  {Track: "Ionic", Nombre: 1},
  {Track: "Angular", Nombre: 0},
  {Track: "NodeJS", Nombre: 0},
  {Track: "Xamarian", Nombre: 0},

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Track','Nombre'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
