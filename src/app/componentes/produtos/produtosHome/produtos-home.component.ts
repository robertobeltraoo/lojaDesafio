import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos-home.component.html',
  styleUrls: ['./produtos-home.component.css']
})
export class ProdutosHomeComponent implements OnInit {

  produto: Produto[] = [];

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
