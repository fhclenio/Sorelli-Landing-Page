import { Component } from '@angular/core';
import { Menu } from '../../Models/Enum/menu.enum';
import { Paginaservice } from '../../Services/paginas.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public itensMenu: Menu[] = Object.values(Menu);
  paginasService: Paginaservice;

  menuValue:boolean = false;

  toggleMenu(){
    this.menuValue =! this.menuValue ;
  }

  constructor(paginasService: Paginaservice){
    this.paginasService = paginasService;
  }

  mudarPagina(item: string){
    if(item == "Contato") return;
    this.paginasService.mudarPagina(item);
  }
}


