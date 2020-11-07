import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoUpdateComponent } from './estabelecimento-update.component';



@NgModule({
  declarations: [EstabelecimentoUpdateComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [EstabelecimentoUpdateComponent]
})
export class EstabelecimentoUpdateModule { }
