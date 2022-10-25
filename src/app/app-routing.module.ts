import { PaginaProdutoComponent } from './componentes/produtos/pagina-produto/pagina-produto.component';
import { ProdutosHomeComponent } from './componentes/produtos/produtosHome/produtos-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosOsProdutosComponent } from './componentes/produtos/todos-os-produtos/todos-os-produtos.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtosHome',
    pathMatch: 'full'
  },
  {
    path: 'produtosHome',
    component: ProdutosHomeComponent
  },
  {
    path: 'todosOsProdutos',
    component: TodosOsProdutosComponent
  },
  {
    path: 'todosOsProdutos/:categoria',
    component: TodosOsProdutosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'paginaProduto/:id',
    component: PaginaProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
