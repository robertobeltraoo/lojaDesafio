import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto';

@Component({
  selector: 'app-produtos-home',
  templateUrl: './produtos-home.component.html',
  styleUrls: ['./produtos-home.component.css']
})
export class ProdutosHomeComponent implements OnInit {

  produtoHome: Produto = {
    id: 1111,
    nomeProduto: 'produto xyz',
    precoProduto: 60.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
