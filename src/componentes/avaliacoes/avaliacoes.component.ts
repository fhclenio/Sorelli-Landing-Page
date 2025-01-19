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
    { id: 1, name: 'João', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet aliquet nulla at condimentum. Praesent nec nulla vulputate, fermentum erat ac, commodo justo. Nam quis tortor varius, pulvinar ante vel, scelerisque ipsum. Sed sit amet pretium sapien. Maecenas sed laoreet metus, et tempor nulla. Sed porta sapien felis, vitae consectetur.  Sed porta sapien felis, vitae consectetur.' },
    { id: 2, name: 'Maria', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh libero, imperdiet id semper eleifend, dapibus in ipsum. Donec accumsan libero vel enim placerat cursus. Vestibulum ut congue turpis. Pellentesque lacinia, est nec hendrerit semper, dolor lorem scelerisque orci, at vulputate nisi metus a mi. Etiam eros tortor, consectetur sit.' },
    { id: 3, name: 'Carlos', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ex in justo placerat imperdiet. Mauris ut lacus vitae massa dignissim iaculis. Nulla eget malesuada lorem. Maecenas ut gravida odio. Sed a quam eget turpis feugiat sagittis eget sed diam. Aenean in elit sapien. Fusce dictum ut ipsum sit amet rhoncus. In hac habitasse platea dictumst. Aliquam at est sed sapien scelerisque eleifend. Proin massa turpis, tincidunt nec risus eu.' },
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
