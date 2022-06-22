export interface ISerie{
    nome: string;
    lancamento: string;
    temporadas: number;
    classificacao: number;
    cartaz: string;
    generos: string[]; // o [] indica que é um array
    pagina?: string;// a ? indica que o campo não é obrigatório
    favorito: boolean; 
}