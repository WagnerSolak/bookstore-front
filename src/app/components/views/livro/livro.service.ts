import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  findAllByCategoria(id_cat: String): Observable<Livro[]>{
    // https://solakbookstore-api.herokuapp.com/livros?categoria=1
    // onde:                urlBase             livros? categria=id que recebeu como arg (id_cat)
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }
}
