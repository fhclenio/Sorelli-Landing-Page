import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [],
  templateUrl: './avaliacoes.component.html',
  styleUrl: './avaliacoes.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvaliacoesComponent {

  reviews = [
    { id: 1, name: 'João', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Maria', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: 'Carlos', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, name: 'Pedro', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    if(!swiperEl) 
      return;
    
    const buttonElNext = document.querySelector('.swiper-button-next');
    if (buttonElNext) {
      buttonElNext.addEventListener('click', () => {
        swiperEl!.swiper.slideNext();
      });
    }

    const buttonElPrev = document.querySelector('.swiper-button-prev');
    if (buttonElPrev) {
      buttonElPrev.addEventListener('click', () => {
        swiperEl!.swiper.slidePrev();
      });
    }
  }

}
