import { Component } from '@angular/core';
import { HrefService } from '../../Services/href.service';

@Component({
  selector: 'app-campeas',
  standalone: true,
  imports: [],
  templateUrl: './campeas.component.html',
  styleUrl: './campeas.component.css'
})
export class CampeasComponent {
  href: string = '';

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
