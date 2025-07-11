import { Component } from '@angular/core';
import { InicioComponent } from "../../componentes/inicio/inicio.component";
import { AutoraisComponent } from "../../componentes/autorais/autorais.component";
import { PontosComponent } from "../../componentes/pontos/pontos.component";
import { ConfiancaComponent } from "../../componentes/confianca/confianca.component";
import { CampeasComponent } from "../../componentes/campeas/campeas.component";
import { AvaliacoesComponent } from "../../componentes/avaliacoes/avaliacoes.component";
import { MetricasComponent } from "../../componentes/metricas/metricas.component";
import { InsumosComponent } from "../../componentes/insumos/insumos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InicioComponent, AutoraisComponent, PontosComponent, ConfiancaComponent, CampeasComponent, AvaliacoesComponent, MetricasComponent, InsumosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
