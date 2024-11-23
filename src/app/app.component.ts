import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AMelhorComponent } from "../componentes/amelhor/amelhor.component";
import { AutoraisComponent } from "../componentes/autorais/autorais.component";
import { TrailerComponent } from '../componentes/trailer/trailer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, AMelhorComponent, AutoraisComponent, TrailerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sorelli-Landing-Page';
}
