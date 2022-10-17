import { Produto } from './produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = {
    id: 0,
    nomeProduto: 'produto xyz',
    precoProduto: 60.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
