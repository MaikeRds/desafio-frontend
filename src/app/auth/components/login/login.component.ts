import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit   {

  formulario: FormGroup;

  constructor(
    private authService:AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(3)]],
    });
  }

  async onSubmit() {
    try {
        await this.authService.login({
          username: this.formulario.value.username,
          password: this.formulario.value.password
        });
        this.router.navigate(['']);
      } catch (error) {
        this.authService.showMessage(error.error.message, true)
       // console.error(error.error.message)
      }

  }

}
