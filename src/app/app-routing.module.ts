import { EstabelecimentoCreateComponent } from './estabelecimento/components/estabelecimento-create/estabelecimento-create.component';
import { CadastroComponent } from './auth/components/cadastro/cadastro.component';
import { AuthGuard } from './auth/shared/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { EstabelecimentoUpdateComponent } from './estabelecimento/components/estabelecimento-update/estabelecimento-update.component'
import { EstabelecimentoDeleteComponent } from './estabelecimento/components/estabelecimento-delete/estabelecimento-delete.component'

const routes: Routes = [{
  path: '', component: HomeComponent,
    children: [
      { path: '', component: EstabelecimentoComponent },
      { path: 'estabelecimento/cadastrar', component: EstabelecimentoCreateComponent },
      { path: 'estabelecimento/atualizar/:id', component: EstabelecimentoUpdateComponent },
      { path: 'estabelecimento/deletar/:id', component: EstabelecimentoDeleteComponent },

    ],
    canActivate: [AuthGuard]
},
{ path: '', component: AuthComponent,
children: [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
]},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
