import { Categoria } from './../categoria';
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

  listaProduto: Produto[] = [];
  listaProdutoCategoria: Produto[] = [];
  produto: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    descricaoProduto: '',
    imagemProduto: '',
    altProduto: '',
    categoria: ''
  }
  categoriaDB: Categoria = {
    id: 0,
    nomecategoria: ''
  }

  itensPorListagem: boolean = false
  idCategoriaInicial = 1

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
  //alterar o nome pra listar por categoria
  listarProdutos(){
    nomeDaCategoriaParaListar = this.buscarNomeCategoria()
    this.itensPorListagem = true
    this.produtoService.listarProdutos(nomeDaC , this.itensPorListagem)
      .subscribe((listaProdutosPorCategoria) => {
        this.listaProduto = listaProdutosPorCategoria
        this.listaProdutoCategoria = listaProdutosPorCategoria
      })
  }

  buscarNomeCategoria(){
    if(this.categoriaDB.nomecategoria === this.produto.nomeProduto){
      return this.produto.nomeProduto.value
    }
  }
  // produtoCategoria(categoria: string | any){
  //   this.listaProdutoCategoria = produtos.filter(produtos.)
  // }
}
