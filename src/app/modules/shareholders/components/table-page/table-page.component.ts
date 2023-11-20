import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;

}
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent {


    listOfData: Person[] = [
      {
        key: '1',
        name: 'Colque mamani juan',
      },
      {
        key: '2',
        name: 'peres velasques martin',

      },
      {
        key: '3',
        name: 'lopez Cerezo Carlos',

      },
      {
        key: '1',
        name: 'Colque mamani juan',
      },
      {
        key: '2',
        name: 'peres velasques martin',

      },
      {
        key: '3',
        name: 'lopez Cerezo Carlos',

      },{
        key: '1',
        name: 'Colque mamani juan',
      },
      {
        key: '2',
        name: 'peres velasques martin',

      },
      {
        key: '3',
        name: 'lopez Cerezo Carlos',

      },
    ];
}
