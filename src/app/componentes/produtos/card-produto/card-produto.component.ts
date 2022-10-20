import { Router } from '@angular/router';
import { Produto } from './../produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() produto: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    descricaoProduto: '',
    imagemProduto: '',
    altProduto: '',
    categoria: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irParaProduto(idProdutos: number | any){
    this.router.navigate([`paginaProduto/${idProdutos}`])
  }
}
