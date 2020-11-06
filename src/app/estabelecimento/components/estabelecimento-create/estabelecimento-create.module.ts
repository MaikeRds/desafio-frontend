import { AppMaterialModule } from './../../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoCreateComponent } from './estabelecimento-create.component';



@NgModule({
  declarations: [EstabelecimentoCreateComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[EstabelecimentoCreateComponent]
})
export class EstabelecimentoCreateModule { }
