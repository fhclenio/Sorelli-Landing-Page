import { Component } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.css'
})
export class PromocoesComponent {
  listaDePromocoes: string[] = [
    'banner-promocao-1.png',
    'banner-promocao-2.png',
    'banner-promocao-3.png',
    'banner-promocao-4.png',
    'banner-promocao-5.png',
    'banner-promocao-6.png',
    'banner-promocao-7.png',
    'banner-promocao-8.png',
    'banner-promocao-9.png',
    'banner-promocao-10.png'
  ];

  esconderElemento(event: Event, index: number) {
    const elementoImg = event.target as HTMLImageElement;

    if (index < 4) {
      if(elementoImg)
        elementoImg.style.display = 'none';

      return;
    }
        
    const elementoPai = elementoImg.parentElement;
    if (elementoPai) 
      elementoPai.style.display = 'none';
    
  }
}
