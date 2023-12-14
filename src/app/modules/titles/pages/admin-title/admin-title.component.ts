import { Component } from '@angular/core';

import { Titulos } from '../../interfaces/titles';
import { AdminTitleService } from '../../services/admin-title.service';

@Component({
  selector: 'app-admin-title',
  templateUrl: './admin-title.component.html',
  styleUrls: ['./admin-title.component.css']
})
 export class AdminTitleComponent {
  TitlesData: Titulos[] = [];

  constructor (private admintitleService: AdminTitleService){}
  ngOnInit():void {
    this.loadTitles();
  }
  loadTitles ():void {
    this.admintitleService.getTitles().subscribe( Data => {
      this.TitlesData = Data;
  })}




}
