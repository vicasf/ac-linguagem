export interface IAtor{
    nome: string;
    local: string;
    idade: number;
    cartaz: string;
    trabalhos: string[]; // o [] indica que é um array
    pagina?: string;// a ? indica que o campo não é obrigatório
    favorito: boolean; 
}