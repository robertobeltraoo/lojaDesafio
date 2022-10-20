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

    listarProdutos( ): Observable<Produto[]>{
      
      //depois colocaro filtro categoria para mostrar os produtos de uma unica categoria
      // let params = new HttpParams()
      
      // if(categoria.trim() === "starwars")
      //   params = params.set("q", categoria)
      
      return this.http
        .get<Produto[]>(this.API);
    }

    mostrarProduto(id: number): Observable<Produto>{
        const url = `${this.API}/${id}`
        return this.http.get<Produto>(url)
    }
}
