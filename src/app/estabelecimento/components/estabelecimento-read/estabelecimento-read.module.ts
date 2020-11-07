import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoReadComponent } from './estabelecimento-read.component';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [EstabelecimentoReadComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [EstabelecimentoReadComponent]
})
export class EstabelecimentoReadModule { }
