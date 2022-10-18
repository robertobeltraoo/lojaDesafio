import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  produto: Produto[] = [{
    id: 1,
    nomeProduto: 'Baby Yoda',
    precoProduto: 60.00,
    descricaoProduto: "Esse brinquedo de pelúcia de A Criança de 11 polegadas vai roubar os corações dos fãs de Star Wars em todo lugar! Inspirado pela série da Disney+, O Mandaloriano, o adorável boneco de pele verde, grandes orelhas e olhos se parece com um bebê Yoda, mas é chamado de A Criança. O brinquedo de pelúcia tem corpo macio, além de uma base firme cheia de grãos, perfeito para abraçar ou exibir como um item de colecionador. O personagem ​usa roupas iguais aos do programa. Os fãs de ​Star Wars vão adorar assumir o papel do caçador de recompensas Mandaloriano e cuidar da Criança por conta própria!",
    imagemProduto: "./../../../../assets/yoda.jpg",
    altProduto: 'Foto boneco do Yoda'
  },
  {
    id: 2,
    nomeProduto: 'PS5',
    precoProduto: 6000.00,
    descricaoProduto: "Console de ultima geração da sony",
    imagemProduto: "./../../../../assets/console.jpeg",
    altProduto: 'Foto PS5'
  },
  {
    id: 1,
    nomeProduto: 'Action Figure Ace',
    precoProduto: 450.00,
    descricaoProduto: "Boneco do personagem Ace",
    imagemProduto: "./../../../../assets/figure.jpg",
    altProduto: 'Foto action figure Ace'
  }
  ]
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  irParaProduto(){
    this.router.navigate(['/paginaProduto'])
  }
}
