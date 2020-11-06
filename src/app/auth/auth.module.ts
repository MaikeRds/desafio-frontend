import { CadastroModule } from './components/cadastro/cadastro.module';
import { LoginModule } from './components/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './shared/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LoginModule,
    CadastroModule
  ],
  providers: [AuthService, MatSnackBar]
})
export class AuthModule { }
