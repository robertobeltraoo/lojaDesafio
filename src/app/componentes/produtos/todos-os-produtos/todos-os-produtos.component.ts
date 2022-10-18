import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-todos-os-produtos',
  templateUrl: './todos-os-produtos.component.html',
  styleUrls: ['./todos-os-produtos.component.css']
})
export class TodosOsProdutosComponent implements OnInit {

  produtoHome: Produto[] = [{
    id: 1,
    nomeProduto: 'Baby Yoda',
    precoProduto: 60.00,
    imagemProduto: "./../../../../assets/yoda.jpg",
    altProduto: 'Foto boneco do Yoda'
  },
  {
    id: 2,
    nomeProduto: 'PS5',
    precoProduto: 6000.00,
    imagemProduto: "./../../../../assets/console.jpeg",
    altProduto: 'Foto PS5'
  },
  {
    id: 1,
    nomeProduto: 'Action Figure Ace',
    precoProduto: 450.00,
    imagemProduto: "./../../../../assets/figure.jpg",
    altProduto: 'Foto action figure Ace'
  }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irParaProduto(){
    this.router.navigate(['/paginaProduto'])
  }
}
