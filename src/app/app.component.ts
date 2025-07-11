import { Paginas } from './../Models/Enum/paginas.enum';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../componentes/menu/menu.component';
import { TrailerComponent } from '../componentes/trailer/trailer.component';
import { Paginaservice } from '../Services/paginas.service';
import { HomeComponent } from "./home/home.component";
import { TaxasDeEntregaComponent } from "./taxas-de-entrega/taxas-de-entrega.component";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TrailerComponent, HomeComponent, TaxasDeEntregaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pizza Sorelli';
  Paginas = Paginas;
  paginasService: Paginaservice;
  isDebug = environment.debugMode;

  constructor(paginasService: Paginaservice){
    this.paginasService = paginasService;
  }
}
