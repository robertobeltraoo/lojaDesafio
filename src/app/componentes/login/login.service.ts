import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly API = 'http://localhost:3000/usuarios'
  
  constructor(
    private http: HttpClient
  ) { }

    validLogin(usuario: string, senha: string): Observable<Usuario>{
        const url = `${this.API}`
        return this.http.post<Usuario>(url, {
          nome: usuario,
          senha: senha
        })
    }
}
