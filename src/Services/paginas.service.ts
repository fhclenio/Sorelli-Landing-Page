import { provideRouter } from '@angular/router';
import { Injectable } from '@angular/core';
import { Paginas } from '../Models/Enum/paginas.enum';

@Injectable({
  providedIn: 'root',
})
export class PaginasService {
    paginaAtual = Paginas.Home;

    mudarPagina(pagina: string) {
        switch (pagina) {
            case "Promoções":
                this.paginaAtual =  Paginas.Promocoes;
                break;
            case "Taxas de Entrega":
                this.paginaAtual =  Paginas.TaxasDeEntrega;
                break;
            default:
                this.paginaAtual =  Paginas.Home;
                break;
        }
    }
}