import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form;

  // constructor(private formBuilder: FormBuilder) { 
  //   this.criarForm()
  // }

  // criarForm(){
  //   this.form = this.formBuilder.group({
  //     email: [''],
  //     password: ['']
  //   })
  // }

  ngOnInit(): void {
  }

  validacaoLogin ( userName: string, userPassword: string){
    
    //if(userName === this.user[0]){}
  }

}
