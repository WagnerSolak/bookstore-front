import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]>{
    // https://solakbookstore-api.herokuapp.com/livros?categoria=1
    // onde:                urlBase             livros? categria=id que recebeu como arg (id_cat)
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }

  findAllById(id: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.get<Livro>(url)
  }
  
  // update fazendo uma requisição ao back-end 
  update(livro: Livro): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${livro.id}`
    return this.http.put<Livro>(url, livro)
    
  }

  create(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro)
    }

    delete(id: String): Observable<void>{
      const url = `${this.baseUrl}/livros/${id}`
      return this.http.delete<void>(url)
    }

    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
}
}
