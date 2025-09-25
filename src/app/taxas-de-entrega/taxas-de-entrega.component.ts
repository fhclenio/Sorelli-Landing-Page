import { Component } from '@angular/core';

@Component({
  selector: 'app-taxas-de-entrega',
  standalone: true,
  imports: [],
  templateUrl: './taxas-de-entrega.component.html',
  styleUrl: './taxas-de-entrega.component.css'
})
export class TaxasDeEntregaComponent {
  taxas = [
    { bairro: 'Alto do Cuscuz', valor: 'R$ 8,00' },
    { bairro: 'Baixada Ouro Negro', valor: 'R$ 9,00' },
    { bairro: 'Barão de Camaçari (antes do largo)', valor: 'R$ 7,00' },
    { bairro: 'Barão de Camaçari (depois do largo)', valor: 'R$ 8,00' },
    { bairro: 'Boa Vista', valor: 'R$ 7,00' },
    { bairro: 'Bom Viver', valor: 'R$ 8,00' },
    { bairro: 'BR', valor: 'R$ 8,00' },
    { bairro: 'Campinho', valor: 'R$ 8,00' },
    { bairro: 'Catende', valor: 'R$ 6,00' },
    { bairro: 'Centro', valor: 'R$ 6,00' },
    { bairro: 'Chesf', valor: 'R$ 9,00' },
    { bairro: 'Condomínios (Bom Viver)', valor: 'R$ 9,00' },
    { bairro: 'Estrada antiga Bela Flor', valor: 'R$ 10,00' },
    { bairro: 'Fleming', valor: 'R$ 9,00' },
    { bairro: 'Gravito', valor: 'R$ 8,00' },
    { bairro: 'Ladeira de Pedra', valor: 'R$ 7,00' },
    { bairro: 'Ladeira do Gogó', valor: 'R$ 7,00' },
    { bairro: 'Pioneiro', valor: 'R$ 8,00' },
    { bairro: 'Planalto 1', valor: 'R$ 8,00' },
    { bairro: 'Planalto 2', valor: 'R$ 8,00' },
    { bairro: 'Rua Nova', valor: 'R$ 5,00' },
    { bairro: 'Santa Rita', valor: 'R$ 7,00' },
    { bairro: 'Santo André', valor: 'R$ 9,00' },
    { bairro: 'Urbis', valor: 'R$ 8,00' }
  ];
}
