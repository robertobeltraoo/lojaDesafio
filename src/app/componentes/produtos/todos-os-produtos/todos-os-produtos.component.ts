import { Router } from '@angular/router';
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
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    // this.produtoService.listarProdutos()
    //   .subscribe((listaProduto) => {
    //     this.listaProduto = listaProduto
    //   })
  }

  // irParaProduto(idProdutos: number | any){
  //   this.router.navigate([`paginaProduto/${idProdutos}`])
  // }
}
