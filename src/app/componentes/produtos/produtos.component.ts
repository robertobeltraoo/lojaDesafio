import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto[] = [{
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
    id: 3,
    nomeProduto: 'Action Figure Ace',
    precoProduto: 450.00,
    imagemProduto: "./../../../../assets/figure.jpg",
    altProduto: 'Foto action figure Ace'
  }
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
     
  }

  irParaProduto(idProdutos: number | any){
    this.router.navigate([`paginaProduto/${idProdutos}`])
  }

  verTudo(){
    this.router.navigate(['/todosOsProdutos'])
  }

}
