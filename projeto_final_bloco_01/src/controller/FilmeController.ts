import { Filme } from "../model/Filme";
import { FilmeRepository } from "../repository/FilmeRepository";


export class FilmeController implements FilmeRepository{
    
      

    private listaFilmes: Array<Filme> = new Array<Filme>();


    public id: number = 0;


    procurarPorId(id: number): void {
        let buscarFilme = this.buscarNoArray(id)
        if(buscarFilme !== null) {
            buscarFilme.visualizar()
        } else {
            console.log("Filme não encontrado!")
        }
    }
 
    listarFilmes(): void {
       for (let filme of this.listaFilmes){
            filme.visualizar();
       }
    }


    cadastrar(filme: Filme): void {
        this.listaFilmes.push(filme);
        console.log("Filme adicionado com sucesso!")
    }


    atualizar(filme: Filme): void {
        let buscarFilme = this.buscarNoArray(filme.id);

        if(buscarFilme !== null){
            this.listaFilmes[this.listaFilmes.indexOf(buscarFilme)] = filme;
            console.log(`o filme número ${filme.id} foi Atualizado com sucesso!`)
        }else
            console.log("Filme não Encontrado!")
    }


    deletar(id: number): void {
        let buscarFilme = this.buscarNoArray(id);

        if(buscarFilme !== null){
            this.listaFilmes.splice(this.listaFilmes.indexOf(buscarFilme), 1)
            console.log(`O Filme número ${id} foi Excluído!`)
        }else
            console.log("\nFilme não Encontrado!")
    }



    public gerarId(): number{
        return ++ this.id
    }
    

    public buscarNoArray(id: number): Filme | null{
        for (let filme of this.listaFilmes){
            if (filme.id === id)
                return filme;
       }

       return null;
    }
}