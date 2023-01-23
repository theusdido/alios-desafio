import { Component, OnInit, ViewChildren } from '@angular/core';
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

  public cooperado:Cooperado = {
    nome:'Mariane de Souza Oliveira',
    cpf:'',
    conta:{
      aplicacao:'557932-4',
      corrente:'778461-8'
    }    
  };

  public situacao_cadastral:Array<any> = [
    {
      icone:'./assets/icon/user.png',
      titulo:this.cooperado.nome,
      legenda:'Nome'
    },
    {
      icone:'./assets/icon/check-success.png',
      titulo:'Situação do CPF',
      legenda:'Regular'
    }
  ];

  public conta_aplicacao:Array<any> = [
    {
      icone:'./assets/icon/conta.png',
      titulo:'Número da conta',
      legenda:this.cooperado.conta.aplicacao
    }
  ];  

  public conta_corrente:Array<any> = [
    {
      icone:'./assets/icon/conta.png',
      titulo:'Número da conta',
      legenda:this.cooperado.conta.corrente
    }
  ];

  public duplicar_conta_aplicacao:any = {
    href:'/duplicar/ca/' + this.cooperado.conta.aplicacao,
    label:'Duplicar'
  };

  public duplicar_conta_corrente:any = {
    href:'/duplicar/cc/' + this.cooperado.conta.corrente,
    label:'Duplicar'
  };

  @ViewChildren('required')  obrigatorios: any;

  constructor(
    public validar:ValidarService,
    public rest:RestService
  ) { }

  ngOnInit(): void {
  }

  consultarCPF(){
    if (!this.validar.isRequired(this.obrigatorios)){
      this.msg_error = 'Informe um CPF';
      return;
    } 
    let is_valid_cpf = this.validar.isValidCPF(this.cpf);
    if (!is_valid_cpf){
      this.valid_class_cpf = this.validar.getTDClass(is_valid_cpf);
      this.msg_error = 'Informe um CPF válido'
      return;
    }    

    this.rest.get('https://raw.githubusercontent.com/theusdido/alios-desafio/master/cooperados.json')
    .subscribe(
      (_res:any) => {
        const result = _res.find((cooperado:any) => {
          return cooperado.cpf === this.cpf;
        });
        console.log(result);
        this.cards_consulta = 'inline';
      }
    );
  }

  salvar() : any {
    // if (!this.validar.isRequired(this.obrigatorios)) return false;
    // $("#preloader-active").show();
    // this.rs.get("cliente",{
    //   op:"salvar",
    //   cliente:this.cliente
    // }).subscribe( 
    //   (response:any) => {
    //     $("#preloader-active").hide();
    //     if (response.status == 0){
    //       ls.set("perfil","C");
    //       ls.set("loja",0);
    //       ls.set("isLogado",true);
    //       ls.set("cliente",response.id);
    //       ls.set("userid",response.userid);
    //       ls.set("username",response.username);
    //       ls.set("usergroup",response.usergroup);
    //       this.rota.navigate(["/dashboard"]);
    //     }
    //   },
    //   (error) => 
    //   {
    //     $("#preloader-active").hide();
    //   }
    // );
  }  
}
