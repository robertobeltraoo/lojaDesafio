import { Produto } from "./produto";
export interface Categoria {
  id: number;
  nome: string; // nomecategorias poder só nome
  slug: string;

  produtos: Produto[];
}
