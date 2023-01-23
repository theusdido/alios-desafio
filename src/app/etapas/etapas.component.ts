import { Component, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.scss']
})

export class EtapasComponent implements AfterViewInit {
  @Input() steps:Array<any> = [
    {label: 'Início'},
    {label: 'Documentos'},
    {label: 'Dados cadastrais'},
    {label: 'Admissão'}
  ];

  constructor(){
    
  }
  
  ngAfterViewInit(){
    document.querySelectorAll('.component-step li')[0]?.querySelector('.icon-step')?.classList.add('current');
    document.querySelectorAll('.component-step li')[1]?.querySelector('.icon-step')?.classList.add('inactive');
    document.querySelectorAll('.component-step li')[2]?.querySelector('.icon-step')?.classList.add('inactive');
    document.querySelectorAll('.component-step li')[3]?.querySelector('.icon-step')?.classList.add('inactive');
  }
}