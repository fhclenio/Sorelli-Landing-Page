import { Component } from '@angular/core';
import { HrefService } from '../../Services/href.service';

@Component({
  selector: 'app-autorais',
  standalone: true,
  imports: [],
  templateUrl: './autorais.component.html',
  styleUrl: './autorais.component.css'
})
export class AutoraisComponent {
  href: string = '';

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
