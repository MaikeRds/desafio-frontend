import { EstabelecimentoService } from './../../estabelecimento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IEstabelecimento } from '../../estabelecimento.model';

@Component({
  selector: 'app-estabelecimento-delete',
  templateUrl: './estabelecimento-delete.component.html',
  styleUrls: ['./estabelecimento-delete.component.css']
})
export class EstabelecimentoDeleteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: EstabelecimentoService,
  ) { }

  formulario: FormGroup;
  estabelecimentoId: number;

  ngOnInit(): void {
    this.estabelecimentoId = +this.route.snapshot.paramMap.get("id");

    this.service.readById(this.estabelecimentoId).subscribe((estabelecimento) => {
      try {
        this.atualizarFormulario(estabelecimento);
      } catch(e){
        this.service.showMessage("Ocorreu um erro!");
        this.router.navigate(['/']);
      }
    });

    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      razaoSocial: [{value: '', disabled: true},[Validators.required,Validators.minLength(10)]],
      numCrfPj: [{value: '', disabled: true}, [Validators.required]],
      nomeFantasia: [{value: '', disabled: true}, [Validators.required]],
      ramoAtividade: [{value: '', disabled: true}, [Validators.required]],
      cnpj: [{value: '', disabled: true}, [Validators.required]],
      endereco: [{value: '', disabled: true}, [Validators.required]],
      numero: [{value: '', disabled: true}, [Validators.required]],
      complemento: [{value: '', disabled: true}, []],
      bairro: [{value: '', disabled: true}, [Validators.required]],
      cidade: [{value: '', disabled: true}, [Validators.required]],
      estado: [{value: '', disabled: true}, [Validators.required]],
      cep: [{value: '', disabled: true}, [Validators.required]],
      fone: [{value: '', disabled: true}, [Validators.required]],
      cel: [{value: '', disabled: true}, [Validators.required]],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]],
    });
  }

  atualizarFormulario(estabelecimento: IEstabelecimento): void {
    this.formulario.setValue({
      razaoSocial: estabelecimento.razaoSocial,
      numCrfPj: estabelecimento.numCrfPj,
      nomeFantasia: estabelecimento.nomeFantasia,
      ramoAtividade: estabelecimento.ramoAtividade,
      cnpj: estabelecimento.cnpj,
      endereco: estabelecimento.endereco,
      numero: estabelecimento.numero,
      complemento: estabelecimento.complemento,
      bairro: estabelecimento.bairro,
      cidade: estabelecimento.cidade,
      estado: estabelecimento.estado,
      cep: estabelecimento.cep,
      fone: estabelecimento.fone,
      cel: estabelecimento.cel,
      email: estabelecimento.email,
    });
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

  delete(): void {
    console.log(this.formulario);
    this.service.delete(this.estabelecimentoId).subscribe(() => {
      this.service.showMessage('Estabelecimento deletado com sucesso!')
      this.router.navigate(['/'])
    })
  }
}
