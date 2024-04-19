import { Filme } from "./Filme";

export class Romance extends Filme{

    private _tipoRomance: string;


	constructor(id: number, titulo: string, Distribuidora: string, tipo: number, preco: number, tipoRomance: string) {
        super(id, titulo, Distribuidora, tipo, preco)
		this._tipoRomance = tipoRomance;
	}


	public get tipoRomance() {
		return this._tipoRomance;
	}


	public set tipoRomance(tipoRomance: string) {
		this._tipoRomance = tipoRomance;
	}
    public visualizar(): void {
        super.visualizar();
        console.log(`Gênero do filme: ${this._tipoRomance}`);
}
}