import { buscarLivros } from "./utils/pesquisaLivros.js";
import {MostrarLivrosPesquisados, SetupPagination} from "./utils/MostrarLivrosPesquisados.js"
import { criarLivrosTemplates } from "./CriarLivrosTemplates.js";
import { GeneroAleatorio, inteiroAleatorio } from "./utils/Sugestão.js";

const caixaDePesquisa = document.querySelector("#caixaDePesquisa");

const buscaContainer = document.getElementById('caixaDeLivros');
const paginaçãoContainer = document.getElementById('pagination');
const categorias =  document.querySelector("#categorias_container");
const btns_categorias = categorias.querySelectorAll('.chips-item')

const sugestaoContainer = document.getElementById('sugestao-container');
const btns_sugestão = document.querySelectorAll('.btn-sugestao')


caixaDePesquisa.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const pesquisa = caixaDePesquisa.value
        const listaLivros = await buscarLivros(pesquisa, 30, 40);
        console.log(listaLivros) // isso retorna uma lista de objetos, usem o console do navegador para ver como ela é. (pode demorar um pouquinho para aparecer, pois a API demora um pouco para responder)
        // terminem o código aqui.
        // OBS1: usem o arquivo "template.js", vai ser bem útil.
        // OBS2: Eu deixei algumas coisas para serem padronizadas, como a data e a foto da capa, pois a data pode vir em alguns formatos diferentes e a foto da capa pode não existir. Então tratem esse erro.
        
        const lista_templates = criarLivrosTemplates(listaLivros, pesquisa);
        MostrarLivrosPesquisados(lista_templates, buscaContainer, 4, 1);
        SetupPagination(lista_templates, paginaçãoContainer, 4);

        
    }   
});


for (const button of btns_categorias) {
    button.addEventListener("click", async (event) => {

        const categoria = event.target.innerText
        console.log(categoria) 
        const listaLivros = await buscarLivros(categoria, 0, 40);

        const lista_templates = criarLivrosTemplates(listaLivros, categoria);

        MostrarLivrosPesquisados(lista_templates, buscaContainer, 4, 1);
        SetupPagination(lista_templates, paginaçãoContainer, 4);
    });
}


for (const button of btns_sugestão) {
    button.addEventListener("click", async (event) => {

        const categoria = GeneroAleatorio();
        const indice = inteiroAleatorio(20)
        console.log(categoria) 
        const listaLivros = await buscarLivros(categoria, indice, 4);

        const lista_templates = criarLivrosTemplates(listaLivros, categoria);
        console.log(lista_templates)

        MostrarLivrosPesquisados(lista_templates, sugestaoContainer, 4, 1);
    });
}

async function LivrosIniciais(){
    const categoria = GeneroAleatorio();
    const indice = inteiroAleatorio(20)
    const listaLivros = await buscarLivros(categoria, indice, 4);
    const lista_templates = criarLivrosTemplates(listaLivros, categoria);
    MostrarLivrosPesquisados(lista_templates, buscaContainer, 4, 1);

}

async function sugestaoIniciais(){
    const categoria = GeneroAleatorio();
    const indice = inteiroAleatorio(20)
    const listaLivros = await buscarLivros(categoria, indice, 4);
    const lista_templates = criarLivrosTemplates(listaLivros, categoria);

    MostrarLivrosPesquisados(lista_templates, sugestaoContainer, 4, 1);

}

LivrosIniciais();
sugestaoIniciais();









    
    


   
