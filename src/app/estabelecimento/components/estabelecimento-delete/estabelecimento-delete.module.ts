import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoDeleteComponent } from './estabelecimento-delete.component';



@NgModule({
  declarations: [EstabelecimentoDeleteComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [EstabelecimentoDeleteComponent]
})
export class EstabelecimentoDeleteModule { }
