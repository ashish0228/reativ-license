import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;
  key: number;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', key: 1.0079, action: 'H'},
  {position: 2, name: 'Helium', key: 4.0026, action: 'He'},
  {position: 3, name: 'Lithium', key: 6.941, action: 'Li'},
  {position: 4, name: 'Beryllium', key: 9.0122, action: 'Be'},
  {position: 5, name: 'Boron', key: 10.811, action: 'B'},
  {position: 6, name: 'Carbon', key: 12.0107, action: 'C'},
  {position: 7, name: 'Nitrogen', key: 14.0067, action: 'N'},
  {position: 8, name: 'Oxygen', key: 15.9994, action: 'O'},
  {position: 9, name: 'Fluorine', key: 18.9984, action: 'F'},
  {position: 10, name: 'Neon', key: 20.1797, action: 'Ne'},
  {position: 11, name: 'Sodium', key: 22.9897, action: 'Na'},
  {position: 12, name: 'Magnesium', key: 24.305, action: 'Mg'},
  {position: 13, name: 'Aluminum', key: 26.9815, action: 'Al'},
  {position: 14, name: 'Silicon', key: 28.0855, action: 'Si'},
  {position: 15, name: 'Phosphorus', key: 30.9738, action: 'P'},
  {position: 16, name: 'Sulfur', key: 32.065, action: 'S'},
  {position: 17, name: 'Chlorine', key: 35.453, action: 'Cl'},
  {position: 18, name: 'Argon', key: 39.948, action: 'Ar'},
  {position: 19, name: 'Potassium', key: 39.0983, action: 'K'},
  {position: 20, name: 'Calcium', key: 40.078, action: 'Ca'},
];
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'key', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
