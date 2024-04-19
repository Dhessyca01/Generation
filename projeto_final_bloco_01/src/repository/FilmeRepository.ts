import { Filme } from "../model/Filme";

export interface FilmeRepository {

        // CRUD 
        procurarPorId(id: number): void;
        listarFilmes(): void;
        cadastrar(filme: Filme): void;
        atualizar(filme: Filme): void;
        deletar(id: number): void;
        
    }