import { PaginaProdutoComponent } from './componentes/produtos/pagina-produto/pagina-produto.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosOsProdutosComponent } from './componentes/produtos/todos-os-produtos/todos-os-produtos.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'todosOsProdutos',
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
