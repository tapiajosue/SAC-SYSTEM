import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  theme = true;

  userAvatar = 'assets/logo_azul.png'; // Reemplaza con la URL de la imagen del usuario
  userName = '       Name-User'; // Reemplaza con el nombre del usuario

}

