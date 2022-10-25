import { ProdutoService } from './../produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  listaProduto: Produto[] = []

  produto: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    descricaoProduto: '',
    imagemProduto: '',
    altProduto: '',
    categoria: ''
  }
  itensPorListagem: boolean = false
  
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    this.produtoService.listarProdutos(this.itensPorListagem)
      .subscribe((listaProduto) => {
        this.listaProduto = listaProduto
      })
    
    this.produtoSelecionado();
    //this.produtoSimilar();
  }

  produtoSelecionado() {    
    const idDoProduto = this.activatedRoute.snapshot.params['id'];
    this.produtoService.mostrarProduto(idDoProduto)
    .subscribe((produto) => {
      this.produto = produto
    })
  }

  mudarProduto(idProdutos: number | any){
    // this.router.navigate([`paginaProduto/${idProdutos}`])
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

}
