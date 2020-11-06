import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createEstabelecimento(): void{
    this.router.navigate(['/estabelecimento/cadastrar']);
  }

}
