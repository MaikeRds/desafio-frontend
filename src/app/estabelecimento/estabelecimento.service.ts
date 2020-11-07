import { IEstabelecimento } from './estabelecimento.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  URL = `${environment.api}/estabelecimento`;

  read():Observable<IEstabelecimento[]>{
    return this.http.get<IEstabelecimento[]>(this.URL).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    )
  }

  create(estabelecimento: IEstabelecimento): Observable<IEstabelecimento> {
    return this.http.post<IEstabelecimento>(this.URL, estabelecimento).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: number): Observable<IEstabelecimento> {
    const url = `${this.URL}/${id}`;
    return this.http.get<IEstabelecimento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(estabelecimento: IEstabelecimento): Observable<IEstabelecimento> {
    const url = `${this.URL}/${estabelecimento.id}`;
    return this.http.put<IEstabelecimento>(url, estabelecimento).pipe(
      map((obj) => obj),
      catchError(
        (e) => this.handleError(e)
        )
    );
  }

  delete(id: number): Observable<IEstabelecimento> {
    const url = `${this.URL}/${id}`;
    return this.http.delete<IEstabelecimento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
   // console.log(error);
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    this.showMessage(error.message, true);
    return throwError(errorMessage);
  };
}
