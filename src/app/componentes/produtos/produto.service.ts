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

    listarProdutos(categoria: string, itensPorListagem: boolean): Observable<Produto[]>{
      
      let params = new HttpParams()
      
      if(itensPorListagem === true){
        params = params.set("_limit", itensPorListagem)
      }

      if(categoria.trim().length > 2){
        params = params.set("q", categoria)
      }

      //depois colocaro filtro categoria para mostrar os produtos de uma unica categoria
      
      // if(categoria.trim() === "starwars")
      //   params = params.set("q", categoria)
      
      return this.http
        .get<Produto[]>(this.API, { params });
    }

    mostrarProduto(id: number): Observable<Produto>{
        const url = `${this.API}/${id}`
        return this.http.get<Produto>(url)
    }
}
