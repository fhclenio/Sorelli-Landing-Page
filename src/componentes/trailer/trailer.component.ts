import { Component } from '@angular/core';
import { DatasComemorativasService } from '../../Services/datas-comemorativas.service';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css'
})
export class TrailerComponent {
  datas: DatasComemorativasService;
  
  constructor(datas: DatasComemorativasService) { 
    this.datas = datas;
  }
}
