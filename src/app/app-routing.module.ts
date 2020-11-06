import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
    children: [
      {path: '', component: EstabelecimentoComponent},
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
