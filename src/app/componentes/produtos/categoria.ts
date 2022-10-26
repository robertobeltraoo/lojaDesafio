import { Produto } from "./produto";

export interface Categoria{
    id: number;
    nome: string;
    slug: string;
    produtos: Produto[];
}