import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';


import { NgxFileDropModule } from 'ngx-file-drop';
import { UploadDocumentosCooperadoComponent } from './upload-documentos-cooperado/upload-documentos-cooperado.component';
import { UploadDocumentosRepresentanteComponent } from './upload-documentos-representante/upload-documentos-representante.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { BrandComponent } from './brand/brand.component';
import { EtapasComponent } from './etapas/etapas.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ConsultaCpfComponent } from './consulta-cpf/consulta-cpf.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UploadDocumentosCooperadoComponent,
    UploadDocumentosRepresentanteComponent,
    MenuLateralComponent,
    CabecalhoComponent,
    ConteudoComponent,
    BrandComponent,
    EtapasComponent,
    RodapeComponent,
    ConsultaCpfComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFileDropModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
