import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HrefService } from '../../Services/href.service';

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
    { id: 1, comment: 'Preciso elogiar o trabalho de vocês mais uma vez. A pizza é perfeita, muiiita qualidade, e o carinho que vocês têm conosco clientes é um destaque em Catu!' },
    { id: 2, comment: 'Sou cliente fiel, desde 2019 que só compro com vocês, pois eu sei a qualidade e entrega magnífica! Que Deus abençoe vocês cada dia mais, e que venham anos e mais anos da melhor pizza de Catu.' },
    { id: 3, comment: 'ATENDIMENTO MARAVILHOSO! Obrigada pela simpatia, Catu precisa de estabelecimentos assim, e a pizza nem se fala, a minha preferida.' },
    { id: 4, comment: 'Massa leve, tudo bem saboroso, a melhor pizza que já comi!' },
    { id: 5, comment: 'Uma vez saiu quase de graça uma pizza pelos pontos acumulados. Se eu fosse rica, com certeza já teria deixado vocês ricos.' },
    { id: 6, comment: 'Eu sou apaixonada pela Sorelli, como 6 fatias sem enjoar, já experimentei várias pizzas mas não tem igual, a pizza é leve, saborosa e linda, sim, linda! Chega quentinha e a entrega é super rápida! Amo a Sorelli, não troco por nada, cada centavo gasto vale a pena, meus parabéns pela qualidade!' },
    { id: 7, comment: 'Pra mim é a melhor massa de pizza que tem, fora os ingredientes de qualidade.' },
    { id: 8, comment: 'Praticidade é outra coisa, eu amei mesmo o app, super prático. Vocês sempre inovando.' },
    { id: 9, comment: 'Fiz experiências com outras pizzas de outros lugares e descobri, estamos viciados na Sorelli. Parabéns pelo capricho em cada detalhes, amo a pizza de vocês e super recomendo!! Sem dúvidas a melhor.' },
    { id: 10, comment: 'Gente, sério. Nunca tinha comido uma pizza tão deliciosa como essa.' },
    { id: 11, comment: 'O que mais me chamou atenção além do super recheio e o sabor maravilhoso foi a entrega rápida e toda higienização do entregador na hora que chega em nossa casa. Estão de parabéns em todos os aspectos...' },
    { id: 12, comment: 'Catupiry bom é esse? Bom demais!' },
    { id: 13, comment: 'Gente do céu que pizza é essa? MARAVILHOSA!!! A praiana superou minhas expectativas! Parabéns pela qualidade e pelo sabor maravilhoso. A pizza de vocês é muito bem feita, a embalagem também tem seu diferencial, até os entregadores sempre com um sorriso no rosto, isso faz toda diferença.' },
    { id: 14, comment: 'Já conhecida os outros sabores, mas essa de brigadeiro está acima da média! Muito obrigada! Melhor pizza doce da cidade de Catu.' },
    { id: 15, comment: 'Só a Sorelli permite essa intimidade com os clientes, vocês são 100000! Melhor atendimento, parabéns!' },
    { id: 16, comment: 'Vocês são os melhores, muito top. Essa pizza sertaneja não existe, a pessoa enche a barriga e continua querendo comer.' },
    { id: 17, comment: 'Muito obrigada! Melhor pizza doce da cidade de Catu. ' },
    { id: 18, comment: 'Eu acho que vocês são a única pizzaria que tem essa abertura com os clientes, vocês são diferenciados, vocês fazem seus trabalhos com excelência!' },
    { id: 19, comment: 'Pedi a “americana” hoje pra experimentar, maravilhosaaaa! Sou suspeita a falar porque sou fã de vocês. Melhor pizza da cidade!' },
    { id: 20, comment: 'A pizza de frango com catupiry da Sorelli tá no meu top 3! Bem temperada e super recheada. Sempre fico satisfeita.' },
    { id: 21, comment: 'Merecem toda credibilidade. MEU DEUS!!! Que pizza deliciosa!! Eu amei. Nunca comi uma pizza assim, juro! Fico feliz por poder comer algo tão gostoso.' },
    { id: 22, comment: 'A app tá ótimo, gostei demais. E a pizza de brigadeiro tava uma delícia.' },
    { id: 23, comment: 'Pizza maravilhosa!!! A melhor da cidade, não decepciona nunca! Padrão de qualidade incrível.' },
    { id: 24, comment: 'Rapaz! Maravilhosa. Nunca comi uma pizza igual a essa, amei, quase não deixo pra galera! Delícia! Vocês estão de parabéns!' },
    { id: 25, comment: 'A pizza estava uma delícia, sem dúvidas a melhor da cidade disparada.' },
    { id: 26, comment: 'Tudo certinho. Inclusive pude notar que o camarão veio bem tratado e limpo. Pode parecer bobagem, mas já vi pratos que vieram sujos só pra não cortar o camarão.' },
    { id: 27, comment: 'Gostaria de parabenizar o trabalho realizado por vocês!!! Excelente a pizza feita por vocês. A última pizza estava muito saborosa... Com uma massa leve, crocante, bem recheada... Um sabor único e peculiar que somente vocês sabem fazer. Graças a Deus que deu a vocês o dom gastronômico... Mas enfim, parabéns!!!!' },
    { id: 28, comment: 'Poxa, parabéns viu, pizza maravilhosa, chega quentinha, bem recheada, muito boa mesmo, a cada vez que eu como gosto mais ainda.' },
    { id: 29, comment: 'Obrigado a vocês pelo amor e carinho com os seus clientes. Deus abençoe a todos!' },
    { id: 30, comment: 'Sorelli, super satisfeita com a minha compra. A entrega foi rápida, pizza chegou quentinha, saborosa como sempre. Obrigada!' },
    { id: 31, comment: 'Amei esse aplicativo, vocês arrasaram.' },
    { id: 32, comment: 'Cada dia vocês me surpreendem com o sabor e a qualidade, como sempre perfeita. Sem falar no atendimento, vocês estão de parabéns, a melhor de Catu sem dúvidas!' },
    { id: 33, comment: 'A pizza estava uma delíciaaaa, a melhor que já comi, vocês melhoraram ainda mais, parabéns!' },
    { id: 34, comment: 'Tudo maravilhoso, não tenho o que falar, sempre me surpreendo. Melhor da região, tem que respeitar. Obrigado pela pizza magnífica!' },
    { id: 35, comment: 'Essa é a melhor da cidade, qualidade 100%.' },
    { id: 36, comment: 'Se essa não é a melhor pizza do mundo eu não sei qual é! Maravilhosa como sempre!' },
    { id: 37, comment: 'A melhor que temos. Obrigadaaa, e amei o super desconto!' },
    { id: 38, comment: 'O que dizer? Sem palavras, melhor da região! Como sempre maravilhoso e muito saboroso, muito obrigada e a partir de hoje vou pedir pelo App, fácil e prático.' },
    { id: 39, comment: 'Melhor pizzaria que eu já comprei, nota 10!' },
    { id: 40, comment: 'Não tem como não gostar, melhor de Catu!' },
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
  href: string = '';

  abrirEmNovaAba() { window.open(this.href, '_blank'); }
  
  constructor(private hrefService: HrefService) {
    this.hrefService.href$.subscribe(novo => {
      this.href = novo;
    });
  }
}
