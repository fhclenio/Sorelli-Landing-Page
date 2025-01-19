import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AutoraisComponent } from "../componentes/autorais/autorais.component";
import { TrailerComponent } from '../componentes/trailer/trailer.component';
import { PontosComponent } from "../componentes/pontos/pontos.component";
import { ConfiancaComponent } from "../componentes/confianca/confianca.component";
import { CampeasComponent } from "../componentes/campeas/campeas.component";
import { InsumosComponent } from "../componentes/insumos/insumos.component";
import { AvaliacoesComponent } from "../componentes/avaliacoes/avaliacoes.component";
import { MetricasComponent } from "../componentes/metricas/metricas.component";
import { InicioComponent } from "../componentes/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, AutoraisComponent, TrailerComponent, PontosComponent, ConfiancaComponent, CampeasComponent, InsumosComponent, AvaliacoesComponent, MetricasComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sorelli-Landing-Page';
}
