import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProdutosHomeComponent } from './componentes/produtos-home/produtos-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ProdutosComponent,
    RodapeComponent,
    LoginComponent,
    ProdutosHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
