import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  estado: string;
  address: string;
}

@Component({
  selector: 'app-type-state',
  templateUrl: './type-state.component.html',
  styleUrls: ['./type-state.component.css']
})
export class TypeStateComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'activo',
      estado: 'activo',
      address: ''
    },
    {
      key: '2',
      name: 'inactivo',
      estado: 'activo',
      address: ''
    },
    {
      key: '3',
      name: 'otro',
      estado: 'activo',
      address: ''
    }
  ];
}
