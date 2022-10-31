import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  }

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nome: [''],
      senha: ['']
    })
  }


  validacaoLogin (){
    const usuarioSelecionado = this.loginService.validLogin(this.usuario.nome, this.usuario.senha)
      .subscribe(() => {console.log('Usuario conectado');
    }, 
    (error)=> {
      console.log('Usuario invalido');
    });
    
  }

}
