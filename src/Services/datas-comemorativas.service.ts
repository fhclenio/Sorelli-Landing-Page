import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatasComemorativasService {
  private natal = new DataComemorativa('-12-01T00:00:00', '-01-06T00:00:00');
  private aniversario = new DataComemorativa('-10-01T00:00:00', '-10-31T00:00:00');
  private pascoa: DataComemorativa | undefined;

  private readonly apiUrl = 'https://brasilapi.com.br/api/feriados/v1';
  private http = inject(HttpClient);

  constructor() { 
   }

  retornaLogoAtual(): string {
    return this.natal.estaNaDataAtual() ? './images/logo-sorelli-natal.png' : this.pascoa?.estaNaDataAtual() ? './images/logo-sorelli-pascoa.png' : this.aniversario.estaNaDataAtual() ? './images/logo-sorelli-niver.png' : './images/logo-sorelli-novo.png';
  }

  public buscarEArmazenarPascoa(): Promise<void> {
    const ano = new Date().getFullYear();
    const url = `${this.apiUrl}/${ano}`;

    return firstValueFrom(
      this.http.get<Feriado[]>(url).pipe( 
        map(feriados => {
          const pascoa = feriados.find(f => f.name === 'Páscoa');
          return pascoa?.date;
        }),
        tap(dataString => {
          if (dataString) {
            var dataPascoa = new Date(dataString + 'T00:00:00');

            var dataFutura = new Date(dataPascoa);
            dataFutura.setDate(dataFutura.getDate() + 14);

            var dataPassada = new Date(dataPascoa);
            dataPassada.setDate(dataPassada.getDate() - 14);

            this.pascoa = new DataComemorativa(`-${(dataPassada.getMonth() + 1).toString().padStart(2, '0')}-${dataPassada.getDate().toString().padStart(2, '0')}T00:00:00`, `-${(dataFutura.getMonth() + 1).toString().padStart(2, '0')}-${dataFutura.getDate().toString().padStart(2, '0')}T00:00:00`);
          }
        }),
        map(() => void 0) 
      )
    );
  }

}

class DataComemorativa {
  private dataAtual = new Date();

  DataInicio: Date;
  DataFim: Date;

  constructor(inicio: string, fim: string) {
    this.DataInicio = new Date(this.dataAtual.getFullYear() + inicio);
    this.DataFim = new Date(this.dataAtual.getFullYear() + fim);
  }

  estaNaDataAtual(): boolean {
    return this.DataInicio <= this.dataAtual && this.DataFim >= this.dataAtual;
  }
}

export interface Feriado {
  date: string;
  name: string;
  type: string;
}