import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoComponent } from './estabelecimento.component';



@NgModule({
  declarations: [EstabelecimentoComponent],
  imports: [
    CommonModule
  ],
  exports: [EstabelecimentoComponent]
})
export class EstabelecimentoModule { }
