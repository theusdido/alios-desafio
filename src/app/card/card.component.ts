import { Component,Input } from '@angular/core';

export interface Link {
  href:string,
  label:string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() titulo:string = '';
  @Input() legenda:string = '';
  @Input() itens:Array<any> = [];
  @Input() link!:Link;

  constructor(){}
}