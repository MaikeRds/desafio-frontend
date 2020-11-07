import { EstabelecimentoService } from './../../estabelecimento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IEstabelecimento } from '../../estabelecimento.model';

@Component({
  selector: 'app-estabelecimento-update',
  templateUrl: './estabelecimento-update.component.html',
  styleUrls: ['./estabelecimento-update.component.css']
})
export class EstabelecimentoUpdateComponent implements OnInit {


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

  update(): void {
    console.log(this.formulario);
    this.service.update({id: this.estabelecimentoId, ...this.formulario.value}).subscribe(() => {
      this.service.showMessage('Estabelecimento atualizado com sucesso!')
      this.router.navigate(['/'])
    })
  }
}
