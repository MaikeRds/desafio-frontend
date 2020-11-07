import { Component, OnInit, ViewChild } from '@angular/core';
import { EstabelecimentoService } from '../../estabelecimento.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEstabelecimento } from '../../estabelecimento.model';

@Component({
  selector: 'app-estabelecimento-read',
  templateUrl: './estabelecimento-read.component.html',
  styleUrls: ['./estabelecimento-read.component.css']
})
export class EstabelecimentoReadComponent implements OnInit {

  constructor(
    private service: EstabelecimentoService,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IEstabelecimento>;

  displayedColumns: string[] = [
    'id','razaoSocial', 'numCrfPj', 'nomeFantasia', 'ramoAtividade',
    'cnpj', 'endereco', 'numero', 'complemento', 'bairro', 'cidade',
    'estado', 'cep', 'fone', 'cel', 'email',  'action'
  ];

  ngOnInit(): void {

    this.service.read().subscribe(estabelecimento => {
      console.log(estabelecimento);
      this.dataSource = new MatTableDataSource(estabelecimento);
      this.filterPredicate();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterPredicate(): void {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.endereco.toLowerCase().includes(filter)
      || data.complemento.toLowerCase().includes(filter)
      || data.bairro.toLowerCase().includes(filter)
      || data.cidade.toLowerCase().includes(filter)
      || data.estado.toLowerCase().includes(filter)
      || data.id.toString().includes(filter);
    };
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
