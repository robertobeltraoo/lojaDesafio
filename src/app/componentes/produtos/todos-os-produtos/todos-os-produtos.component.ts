import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-todos-os-produtos',
  templateUrl: './todos-os-produtos.component.html',
  styleUrls: ['./todos-os-produtos.component.css']
})
export class TodosOsProdutosComponent implements OnInit {

  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.produtoService.listarProdutos()
    //   .subscribe((listaProduto) => {
    //     this.listaProduto = listaProduto
    //   })
    this.categoriaSelecionado()
  }

  categoriaSelecionado() {    
    const categoriaProduto = this.activatedRoute.snapshot.params['categoria'];
    this.produtoService.listarPorCategoria(categoriaProduto, false)
    .subscribe((produto) => {
      this.listaProduto = produto
    })
  }
}
