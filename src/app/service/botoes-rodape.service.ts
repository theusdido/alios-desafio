import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotoesRodapeService {
  public on_btn_iniciar_admissao:Subject<string> = new Subject<string>();
  constructor() { }
  
}