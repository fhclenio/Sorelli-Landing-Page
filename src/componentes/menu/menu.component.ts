import { Component } from '@angular/core';
import { Menu } from '../../Models/Enum/menu.enum';
import { PaginasService } from '../../Services/paginas.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public itensMenu: Menu[] = Object.values(Menu);
  paginasService: PaginasService;

  menuValue:boolean = false;

  toggleMenu(){
    this.menuValue =! this.menuValue ;
  }

  constructor(paginasService: PaginasService){
    this.paginasService = paginasService;
  }

  mudarPagina(item: string){
    this.toggleMenu();
    this.paginasService.mudarPagina(item);
  }

  obterLink(item: string){
    switch (item) {
      case 'Contato':
        return 'https://wa.me/5571999450506';
      case 'Cardápio':
        return 'https://pizzasorelli.com.br/cardapio?exibir=&idLojaSelecionada=853';
      default: 
        return "#";
    }
  }
}


