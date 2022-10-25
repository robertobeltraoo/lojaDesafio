import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly API = 'http://localhost:3000/produtos'
  
  constructor(
    private http: HttpClient
  ) { }

    listarProdutos(limitePorListagem: boolean): Observable<Produto[]>{
      
      let params = new HttpParams()
      
      if(limitePorListagem === true){
        const itensPorListagem = 6;
        params = params.set("_limit", itensPorListagem)
      }

      return this.http.get<Produto[]>(this.API, { params });
    }

    mostrarProduto(id: number): Observable<Produto>{
        const url = `${this.API}/${id}`
        return this.http.get<Produto>(url)
    }

    listarPorCategoria(categoria: string, limite: boolean): Observable<Produto[]>{
      
      if(limite===true){
        const url = `${this.API}/?categoria=${categoria}&_limit=6`
        return this.http.get<Produto[]>(url)
      }
      const url = `${this.API}/?categoria=${categoria}`
        return this.http.get<Produto[]>(url)
    }
}
