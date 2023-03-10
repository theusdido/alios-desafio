import { Component, OnInit, ViewChildren,ViewChild } from '@angular/core';
import { BotoesRodapeService } from '../service/botoes-rodape.service';
import { RestService } from '../service/rest.service';
import { ValidarService } from '../service/validar.service';

export interface Cooperado{
  nome:string,
  cpf:string,
  conta:{
    aplicacao:string,
    corrente:string
  }
}

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent {
  public cpf:string = '';
  public valid_class_cpf:string = '';
  public msg_error:string = '';
  public cards_consulta:string = 'none';
  @ViewChild('btn_iniciar_admissao') _btn_iniciar_admissao:any;
  @ViewChild('card_situacao_cadastral') _card_situacao_cadastral:any;
  @ViewChild('card_conta_aplicacao') _card_conta_aplicacao:any;
  @ViewChild('card_conta_corrente') _card_conta_corrente:any;

  public cooperado:Cooperado = {
    nome:'',
    cpf:'',
    conta:{
      aplicacao:'',
      corrente:''
    }    
  };

  public duplicar_conta_aplicacao:any = {
    href:'/duplicar/ca/',
    label:'Duplicar'
  };

  public duplicar_conta_corrente:any = {
    href:'/duplicar/cc/',
    label:'Duplicar'
  };

  @ViewChildren('required')  obrigatorios: any;

  constructor(
    public validar:ValidarService,
    public rest:RestService,
    public botoesrodape_service:BotoesRodapeService
  ) { }

  ngOnInit(): void {
  }

  consultarCPF(){
    this.cards_consulta = 'none';
    if (!this.validar.isRequired(this.obrigatorios)){
      this.msg_error = 'Informe um CPF';
      return;
    } 
    let is_valid_cpf = this.validar.isValidCPF(this.cpf);
    if (!is_valid_cpf){
      this.valid_class_cpf = this.validar.getTDClass(is_valid_cpf);
      this.msg_error = 'Informe um CPF válido';
      return;
    }    

    this.rest.get('https://raw.githubusercontent.com/theusdido/alios-desafio/master/cooperados.json')
    .subscribe(
      (_res:any) => {
        const result = _res.find((_cooperado:any) => _cooperado.cpf === this.cpf);
        if (result != undefined){
          this._card_situacao_cadastral.setItens([
            {
              icone:'./assets/icon/user.png',
              titulo:result.nome,
              legenda:'Nome'
            },
            {
              icone:'./assets/icon/check-success.png',
              titulo:'Situação do CPF',
              legenda:result.situacao
            }
          ]);

          this._card_conta_aplicacao.setItens([
            {
              icone:'./assets/icon/conta.png',
              titulo:'Número da conta',
              legenda:result.conta.aplicacao
            }
          ]);

          this._card_conta_corrente.setItens([
            {
              icone:'./assets/icon/conta.png',
              titulo:'Número da conta',
              legenda:this.cooperado.conta.corrente
            }
          ]);

          this.cards_consulta = 'flex';
        }else{
          this.botoesrodape_service.on_btn_iniciar_admissao.next('initial');
        }
      }
    );
  }
}
