import readlinesync = require("readline-sync")
import { FilmeController } from "./src/controller/FilmeController";
import { Romance } from "./src/model/Romance";
import { Acao } from "./src/model/Ação";
import { colors } from "./src/útil/colors";


export function main() {

  let filmes: FilmeController = new FilmeController()

  let id, tipo, preco, classificacao: number;
  let titulo, distribuidora, tipoRomance: string;
  let tiposFilmes = ['Ação', 'Romance']
  
  while (true) {

    console.log(colors.bg.yellowbright, colors.fg.gray,
      "**********************************************************");
    console.log("*                                              *");
    console.log("*               LOCADORA DS 80's               *");
    console.log("*                                              *");
    console.log("************************************************");
    console.log("*                                              *");
    console.log("*        1 - Listar todos os Filmes            *");
    console.log("*        2 - Listar Filme por id               *");
    console.log("*        3 - Adicionar novo Filme              *");
    console.log("*        4 - Atualizar Filme na plataforma     *");
    console.log("*        5 - Deletar Filme da lista            *");
    console.log("*        0 - Sair                              *");
    console.log("*                                              *");
    console.log("************************************************");
    console.log("                                                 ",
      colors.reset);

    console.log("Entre com a opcao desejada: ")
    let opcao: number = readlinesync.questionInt("")

    if (opcao == 0) {
      console.log(colors.fg.bluestrong,
        "\nLOCADORA DS 80's - O melhor do cinema, agora na sua tela!", colors.reset, "")
      keyPress()
      process.exit(0)
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.blackstrong,
          "\n\nListar filmes em catálogo: \n", colors.reset);

        filmes.listarFilmes();

        keyPress()
        break;

      case 2:
        console.log(colors.fg.greenstrong,
          "\n\Listar filme por ID: \n", colors.reset);

        id = readlinesync.questionInt("Digite o Id do Filme: ");
        filmes.procurarPorId(id);

        keyPress()
        break;

      case 3:
        console.log(colors.fg.cyan,
          "\nAdiconar Novo Filme na plataforma: \n", colors.reset);

        tipo = readlinesync.keyInSelect(tiposFilmes, "", { cancel: false }) + 1;
        titulo = readlinesync.question("Digite o título Filme: ");
        distribuidora = readlinesync.question("Digite a distribuidora do filme: ")
        preco = readlinesync.questionInt("Digite o valor: ");

        switch (tipo) {
          case 1:
            classificacao = readlinesync.questionInt("Digite Classificação indicativa do Filme: ");
            filmes.cadastrar(new Acao(filmes.gerarId(), titulo, distribuidora, tipo, preco, classificacao));
            break
          case 2:
            tipoRomance = readlinesync.question("Digite o tipo de Romance do Filme: ");
            filmes.cadastrar(new Romance(filmes.gerarId(),titulo, distribuidora, tipo, preco, tipoRomance));
            break;
        }
        keyPress()
        break;


      case 4:
        console.log(colors.fg.magentastrong,
          "\nAtualizar Filme na plataforma: \n", colors.reset);

        id = readlinesync.questionInt("Digite o Id do Filme: ", { limitMessage: 'Digite o Id do Filme: ' });
        let filme = filmes.buscarNoArray(id);

        if (filme !== null) {

          tipo = readlinesync.keyInSelect(tiposFilmes, "", { cancel: false }) + 1;1
          titulo = readlinesync.question("Digite o Título do Filme: ");
          distribuidora = readlinesync.question("Digite a distribuidora do filme: ")
          preco = readlinesync.questionInt("Digite o Valor do Filme: ");

          switch (tipo) {
            case 1:
              classificacao = readlinesync.questionInt("Digite classificação indivativa do filme : ");
              filmes.cadastrar(new Acao(filmes.gerarId(), titulo, distribuidora, tipo, preco, classificacao));
              break;
            case 2:
              tipoRomance = readlinesync.question("Digite o tipo de romance do Filme: ");
              filmes.cadastrar(new Romance(filmes.gerarId(), titulo, distribuidora, tipo, preco, tipoRomance));
              break;
          }
        } else
          console.log("Desculpe, filme não encontrado!");

        keyPress()
        break;

      case 5:
        console.log(colors.fg.red,
          "\nDeletar Filme do catálogo: \n", colors.reset);

        id = readlinesync.questionInt("Digite o Id do Filme: ");
        filmes.deletar(id);

        keyPress()
        break;

      case 0:
        console.log(colors.bg.bluebright,
          "\nDS LOCADORA 80's - O melhor do cinema, agora na sua tela!", colors.reset, "");
        sobre();
        break;

      default:
        console.log("\nOpção Inválida\n");

    }

  }

  function sobre(): void {
    console.log(colors.fg.bluestrong,
      "\n***********************************************", colors.reset);
    console.log("            Projeto Desenvolvido por:                ");
    console.log("    Dhessyca Sousa  - dhessyca.pessoal@gmail.com     ");
    console.log("              github.com/Dhessyca01                  ");
    console.log("*****************************************************");
  }

  function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }
}
main()

