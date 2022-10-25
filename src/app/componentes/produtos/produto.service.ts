import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "./categoria";
import { Produto } from "./produto";

@Injectable({ providedIn: "root" })
export class ProdutoService {
  private readonly API = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  listarCategorias(limite = 10): Observable<Categoria[]> {
    const url = `${this.API}/categorias/?limite=${limite}`;
    return this.http.get<Categoria[]>(url);
  }

  listarProdutos(limitePorListagem: boolean): Observable<Produto[]> {
    let params = new HttpParams();

    if (limitePorListagem === true) {
      const itensPorListagem = 6;
      params = params.set("_limit", itensPorListagem);
    }

    return this.http.get<Produto[]>(this.API, { params });
  }

  mostrarProduto(id: number): Observable<Produto> {
    const url = `${this.API}/${id}`;
    return this.http.get<Produto>(url);
  }

  listarPorCategoria(categoria: string, limite = true): Observable<Produto[]> {
    if (limite) {
      const url = `${this.API}/produtos/?categoria=${categoria}&_limit=6`;
      return this.http.get<Produto[]>(url);
    }
    const url = `${this.API}/produtos/?categoria=${categoria}`;
    return this.http.get<Produto[]>(url);
  }
}
