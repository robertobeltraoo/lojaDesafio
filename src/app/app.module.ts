import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LoginComponent } from './componentes/login/login.component';
import { TodosOsProdutosComponent } from './componentes/produtos/todos-os-produtos/todos-os-produtos.component';
import { PaginaProdutoComponent } from './componentes/produtos/pagina-produto/pagina-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ProdutosComponent,
    RodapeComponent,
    LoginComponent,
    TodosOsProdutosComponent,
    PaginaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
