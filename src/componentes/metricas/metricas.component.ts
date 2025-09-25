import { Component } from '@angular/core';
import { HrefService } from '../../Services/href.service';

@Component({
  selector: 'app-metricas',
  standalone: true,
  imports: [],
  templateUrl: './metricas.component.html',
  styleUrl: './metricas.component.css'
})
export class MetricasComponent {
  
  href: string = '';
  anos = 0;
  ngOnInit() {
      const dataFundacao = new Date(2017, 10, 12);
      const dataAtual = new Date();

      let diferencaAnos = dataAtual.getFullYear() - dataFundacao.getFullYear();

      const aniversarioAindaNaoChegou =
        dataAtual.getMonth() < dataFundacao.getMonth() ||
        (dataAtual.getMonth() === dataFundacao.getMonth() && dataAtual.getDate() < dataFundacao.getDate());

      if (aniversarioAindaNaoChegou) 
        diferencaAnos--;

      this.anos = diferencaAnos;
  }

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
