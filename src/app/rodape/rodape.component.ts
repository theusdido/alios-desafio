import { Component } from '@angular/core';
import { BotoesRodapeService } from '../service/botoes-rodape.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
  public display_btn_iniciar_admissao:string = 'none';
  constructor(
    public botoesrodape_service:BotoesRodapeService
  ){
    this.botoesrodape_service.on_btn_iniciar_admissao
    .subscribe(
      (_display:string) => {
        this.display_btn_iniciar_admissao = _display;
      }
    );
  }
}
