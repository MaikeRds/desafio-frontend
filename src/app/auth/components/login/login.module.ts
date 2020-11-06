import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
