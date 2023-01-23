import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './consulta-cpf/consulta-cpf.component';

const routes: Routes = [
  {path:'' , component:ConsultaCpfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
