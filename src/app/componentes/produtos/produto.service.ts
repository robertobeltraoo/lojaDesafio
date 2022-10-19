import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs';

const API = 'http://localhost:4200/'

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

    produtoSelecionado(produtoId: number): Observable<Produto[]>{
      return this.http
        .get<Produto[]>(`${API}paginaProduto/${produtoId}`);
    }
}
