export abstract class Filme{

    private _id: number;
	private _titulo: string;
    private _distribuidora: string;
    private _tipo: number;
    private _preco: number;


	constructor(id: number, titulo: string, distribuidora: string, tipo: number, preco: number) {
		this._id = id;
		this._titulo = titulo
		this._distribuidora = distribuidora;
		this._tipo = tipo;
		this._preco = preco;
	}

    
	public get id() {
		return this._id;
	}

	public set id(id: number) {
		this._id = id;
	}


    
	public get titulo() {
		return this._titulo;
	}

	public set titulo(titulo: string) {
		this._titulo = titulo;
	}



	public get distribuidora() {
		return this._distribuidora;
	}

	public set distribuidora(distribuidora: string) {
		this._distribuidora = distribuidora;
		
	}


	public get tipo() {
		return this._tipo;
	}

	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

    

	public get preco() {
		return this._preco;
	}


	public set preco(preco: number) {
		this._preco = preco;

	}


    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Ação"
                break;
            case 2:
                tipo = "Romance"
                break;
        }

        console.log("****************************************************")
        console.log("                     Produto                        ")
        console.log("****************************************************")
        console.log(`   Id do produto: ${this._id}`)
        console.log(`   Título do Filme: ${this._titulo}`)
        console.log(`   Distribuidora: ${this._distribuidora}`)
        console.log(`   Tipo: ${tipo}`)
        console.log(`   Valor do filme: ${this._preco.toFixed(2)}`)
    }
}