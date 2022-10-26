import { Categoria } from './categoria';
import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly API = 'http://localhost:3000'
  
  constructor(
    private http: HttpClient
  ) { }

    listarProdutos(limitePorListagem = true): Observable<Produto[]>{
      if(limitePorListagem){
        const url = `${this.API}/produtos/?_limit=6`
        return this.http.get<Produto[]>(url)
      }
      const url = `${this.API}/produtos`
        return this.http.get<Produto[]>(url)
    }

    mostrarProduto(id: number): Observable<Produto>{
        const url = `${this.API}/produtos/${id}`
        return this.http.get<Produto>(url)
    }

    listaDeCategorias(): Observable<Categoria[]>{
      const url = `${this.API}/categorias`
      return this.http.get<Categoria[]>(url);
    }

    listarPorCategoria(categoria: string, limite = true): Observable<Produto[]>{
      
      if(limite){
        const url = `${this.API}/produtos/?categoria=${categoria}&_limit=6`
        return this.http.get<Produto[]>(url)
      }
      const url = `${this.API}/produtos/?categoria=${categoria}`
        return this.http.get<Produto[]>(url)
    }
}
