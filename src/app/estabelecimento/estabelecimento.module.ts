import { EstabelecimentoUpdateModule } from './components/estabelecimento-update/estabelecimento-update.module';
import { EstabelecimentoCreateModule } from './components/estabelecimento-create/estabelecimento-create.module';
import { EstabelecimentoService } from './estabelecimento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoComponent } from './estabelecimento.component';
import { AppMaterialModule } from '../app-material.module';
import { EstabelecimentoReadModule } from './components/estabelecimento-read/estabelecimento-read.module'
import { EstabelecimentoDeleteModule } from './components/estabelecimento-delete/estabelecimento-delete.module'



@NgModule({
  declarations: [EstabelecimentoComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    EstabelecimentoCreateModule,
    EstabelecimentoReadModule,
    EstabelecimentoUpdateModule,
    EstabelecimentoDeleteModule,
  ],
  providers: [EstabelecimentoService],
  exports: [EstabelecimentoComponent]
})
export class EstabelecimentoModule { }
