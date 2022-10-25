import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../categoria";
import { Produto } from "./../produto";
import { ProdutoService } from "./../produto.service";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos-home.component.html",
  styleUrls: ["./produtos-home.component.css"],
})
export class ProdutosHomeComponent implements OnInit {
  // @Input() category!: string;
  listaProduto: Produto[] = [];
  categorias: Categoria[] = [];
  produto: Produto = {
    id: 0,
    nomeProduto: "",
    precoProduto: 0,
    descricaoProduto: "",
    imagemProduto: "",
    altProduto: "",
    categoria: "",
  };
  categoriaTeste: string = "starwars";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.listarCategorias();
  }

  irParaProduto(idProdutos: number | any) {
    this.router.navigate([`paginaProduto/${idProdutos}`]);
  }

  listarCategorias() {
    return this.produtoService
      .listarCategorias()
      .subscribe(async (categorias) => {
        this.categorias = categorias;
        this.listarPorCategoria();
      });
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

  mudarProduto(idProdutos: number | any) {
    // this.router.navigate([`paginaProduto/${idProdutos}`])
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate([this.router.url]);
  }

  irParaPaginaDaCategoria(categoria: string | any) {
    this.router.navigate([`todosOsProdutos/${categoria}`]);
  }
}

/* fazer uma lista q vai gerar os nome das categorias na tela, e fazer buscar os produtos que tenham o mesmo valor de atributo dessa categoria 
  posso utilizar value="nome da categoria" saber qual categoria sera exibida na lista
*/
