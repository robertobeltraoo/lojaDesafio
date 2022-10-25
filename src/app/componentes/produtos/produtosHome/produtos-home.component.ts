import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos-home.component.html',
  styleUrls: ['./produtos-home.component.css']
})
export class ProdutosHomeComponent implements OnInit {
  
  // @Input() category!: string;
  listaProduto: Produto[] = [];
  produto: Produto = {
    id: 0,
    nomeProduto: '',
    precoProduto: 0,
    descricaoProduto: '',
    imagemProduto: '',
    altProduto: '',
    categoria: ''
  }
  categoriaTeste: string = 'starwars'
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
  this.listarPorCategoria(this.categoriaTeste)
  }

  irParaProduto(idProdutos: number | any){
    this.router.navigate([`paginaProduto/${idProdutos}`])
  }

  listarPorCategoria(categoria: string){
    this.produtoService.listarPorCategoria(categoria, true)
      .subscribe((listaProdutos) => {
        this.listaProduto = listaProdutos
      })
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

/* fazer uma lista q vai gerar os nome das categorias na tela, e fazer buscar os produtos que tenham o mesmo valor de atributo dessa categoria 
  posso utilizar value="nome da categoria" saber qual categoria sera exibida na lista
*/