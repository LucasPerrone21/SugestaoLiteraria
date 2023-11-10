import { buscarLivros } from "./utils/pesquisaLivros.js";
import {geraTemplate} from './utils/template.js'
import {MostrarLivros, SetupPagination} from "./utils/MostrarLivros.js"

const caixaDePesquisa = document.querySelector("#caixaDePesquisa");


caixaDePesquisa.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const listaLivros = await buscarLivros(caixaDePesquisa.value);
        console.log(listaLivros) // isso retorna uma lista de objetos, usem o console do navegador para ver como ela é. (pode demorar um pouquinho para aparecer, pois a API demora um pouco para responder)

       
        // terminem o código aqui.
        // OBS1: usem o arquivo "template.js", vai ser bem útil.
        // OBS2: Eu deixei algumas coisas para serem padronizadas, como a data e a foto da capa, pois a data pode vir em alguns formatos diferentes e a foto da capa pode não existir. Então tratem esse erro.


        const list_items = [];
        for(let i = 0; i < listaLivros.length; i++){
            let urlFoto = listaLivros[i]['urlFoto']
            let categoria = ''
            let titulo = listaLivros[i]['titulo']
            let autor = listaLivros[i]['autor']
            let idioma = listaLivros[i]['idioma']
            let data = listaLivros[i]['data']
            let editora = listaLivros[i]['editora']
            let livro = geraTemplate(urlFoto, categoria, titulo, autor, idioma, data ,editora);
            list_items.push(livro)
}

        const list_element = document.getElementById('caixaDeLivros');
        const pagination_element = document.getElementById('pagination');

        let pagina_atual = 1;
        let livros = 4;

        MostrarLivros(list_items, list_element, livros, pagina_atual);
        SetupPagination(list_items, pagination_element, livros);
    }
    
});
