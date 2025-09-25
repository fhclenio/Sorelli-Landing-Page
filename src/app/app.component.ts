import { Paginas } from './../Models/Enum/paginas.enum';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../componentes/menu/menu.component';
import { TrailerComponent } from '../componentes/trailer/trailer.component';
import { PaginasService } from '../Services/paginas.service';
import { HomeComponent } from "./home/home.component";
import { TaxasDeEntregaComponent } from "./taxas-de-entrega/taxas-de-entrega.component";
import { environment } from '../environments/environment';
import { HrefService } from '../Services/href.service';
import { PromocoesComponent } from "./promocoes/promocoes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TrailerComponent, HomeComponent, TaxasDeEntregaComponent, PromocoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pizza Sorelli';
  Paginas = Paginas;
  paginasService: PaginasService;
  isDebug = environment.debugMode;

  constructor(paginasService: PaginasService, private hrefService: HrefService){
    this.paginasService = paginasService;
  }
  
  ngOnInit(){
    this.hrefService.setHref('https://pizzasorelli.com.br/cardapio?exibir=&idLojaSelecionada=853');
  }

}
