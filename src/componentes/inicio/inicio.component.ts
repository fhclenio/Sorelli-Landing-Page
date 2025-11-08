import { Component } from '@angular/core';
import { AMelhorComponent } from "../amelhor/amelhor.component";
import { DatasComemorativasService } from '../../Services/datas-comemorativas.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [AMelhorComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  datas: DatasComemorativasService;
    
  constructor(datas: DatasComemorativasService) { 
    this.datas = datas;
  }
}
