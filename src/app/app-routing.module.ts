import { CadastroComponent } from './auth/components/cadastro/cadastro.component';
import { AuthGuard } from './auth/shared/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
    children: [
      { path: '', component: EstabelecimentoComponent },
    ],
    canActivate: [AuthGuard]
},
{ path: '', component: AuthComponent,
children: [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
