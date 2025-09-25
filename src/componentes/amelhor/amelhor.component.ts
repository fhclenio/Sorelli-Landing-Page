import { Component } from '@angular/core';
import { HrefService } from '../../Services/href.service';

@Component({
  selector: 'app-amelhor',
  standalone: true,
  imports: [],
  templateUrl: './amelhor.component.html',
  styleUrl: './amelhor.component.css'
})
export class AMelhorComponent {
  href: string = '';

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
