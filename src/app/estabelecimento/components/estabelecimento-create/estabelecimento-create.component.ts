import { EstabelecimentoService } from './../../estabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estabelecimento-create',
  templateUrl: './estabelecimento-create.component.html',
  styleUrls: ['./estabelecimento-create.component.css']
})
export class EstabelecimentoCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: EstabelecimentoService,
  ) { }

  formulario: FormGroup;

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      razaoSocial: [null,[Validators.required,Validators.minLength(10)]],
      numCrfPj: [null, [Validators.required]],
      nomeFantasia: [null, [Validators.required]],
      ramoAtividade: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, []],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      fone: [null, [Validators.required]],
      cel: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

  create(): void {
    console.log(this.formulario);
    this.service.create(this.formulario.value).subscribe(() => {
      this.service.showMessage('Estabelecimento criado com sucesso!')
      this.router.navigate(['/'])
    })
  }

}
