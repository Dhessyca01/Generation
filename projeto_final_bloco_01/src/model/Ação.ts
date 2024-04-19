import { Filme } from "./Filme";

export class Acao extends Filme{

    private _classificacao: number;

	constructor(id: number, titulo: string, distribuidora: string, tipo: number, preco: number, classificacao: number) {
        super(id, titulo, distribuidora, tipo, preco)
		this._classificacao = classificacao;
	}


	public get classificacao() {
		return this._classificacao;
	}


	public set classificacao(classificacao: number) {
		this._classificacao = classificacao;
	}
    public visualizar(): void {
        super.visualizar();
        console.log(`Classificação indicativa: ${this._classificacao}`);
}
}