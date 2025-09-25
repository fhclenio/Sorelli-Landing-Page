import { Component } from '@angular/core';
import { HrefService } from '../../Services/href.service';

@Component({
  selector: 'app-confianca',
  standalone: true,
  imports: [],
  templateUrl: './confianca.component.html',
  styleUrl: './confianca.component.css'
})
export class ConfiancaComponent {
  href: string = '';

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
