import { Component, OnInit } from '@angular/core';
import { Menu } from '../../Models/Enum/menu.enum';
import { PaginasService } from '../../Services/paginas.service';
import { DatasComemorativasService } from '../../Services/datas-comemorativas.service';
import { HrefService } from '../../Services/href.service';

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
  datas: DatasComemorativasService; 
    
  public canShare = false;

  menuValue:boolean = false;

  href: string = '';
  
  onInit(){
    this.canShare = navigator.share !== undefined;
  }

  async share(event: MouseEvent): Promise<void>{
    event.preventDefault();

    if(!this.canShare) return;

    try {
      await navigator.share({
        title: 'Pizza Sorelli',
        text: '',
        url: window.location.href,
      });
      console.log('Compartilhado com sucesso!');
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  }

  toggleMenu(){
    this.menuValue =! this.menuValue ;
  }

  constructor(paginasService: PaginasService, datas: DatasComemorativasService, private hrefService: HrefService){
    this.paginasService = paginasService;
    this.datas = datas;  
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
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
        return this.href;
      default: 
        return "#";
    }
  }
}


