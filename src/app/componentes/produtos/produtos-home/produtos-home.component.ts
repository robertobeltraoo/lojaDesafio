import { Categoria } from '../categoria';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos-home.component.html',
  styleUrls: ['./produtos-home.component.css']
})
export class ProdutosHomeComponent implements OnInit {
  
  listaProduto: Produto[] = [];
  categorias: Categoria[] = []

  produto: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    descricaoProduto: '',
    imagemProduto: '',
    altProduto: '',
    categoria: ''
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    return this.produtoService.listaDeCategorias()
      .subscribe(async(categorias) =>{
        this.categorias = categorias;
        this.listarPorCategoria();
      })
  }

  irParaProduto(idProdutos: number | any){
    this.router.navigate([`paginaProduto/${idProdutos}`])
  }

  listarPorCategoria() {
    this.categorias.flatMap((categoria) => {
      this.produtoService
        .listarPorCategoria(categoria.nome)
        .subscribe((listaProdutos) => {
          categoria.produtos = listaProdutos;
        });
    });
  }

  mudarProduto(idProdutos: number | any){
    // this.router.navigate([`paginaProduto/${idProdutos}`])
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  irParaPaginaDaCategoria(categoria: string | any){
    this.router.navigate([`todosOsProdutos/${categoria}`])
  }
}
