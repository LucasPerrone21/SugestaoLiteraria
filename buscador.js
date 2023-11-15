import { buscarLivros } from "./utils/pesquisaLivros.js";
import {geraTemplate} from './utils/template.js'
import {MostrarLivrosPesquisados, SetupPagination} from "./utils/MostrarLivrosPesquisados.js"

const caixaDePesquisa = document.querySelector("#caixaDePesquisa");

const categorias =  document.querySelector("#categorias_container");
let btns_categorias = categorias.querySelectorAll('.chips-item')

caixaDePesquisa.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        let pesquisa = caixaDePesquisa.value
        const listaLivros = await buscarLivros(pesquisa);
        console.log(listaLivros) // isso retorna uma lista de objetos, usem o console do navegador para ver como ela é. (pode demorar um pouquinho para aparecer, pois a API demora um pouco para responder)
        // terminem o código aqui.
        // OBS1: usem o arquivo "template.js", vai ser bem útil.
        // OBS2: Eu deixei algumas coisas para serem padronizadas, como a data e a foto da capa, pois a data pode vir em alguns formatos diferentes e a foto da capa pode não existir. Então tratem esse erro.
        criarLivros(listaLivros, pesquisa);  
    }   
});


for (const button of btns_categorias) {
    button.addEventListener("click", async (event) => {

        const categoria = event.target.innerText
        console.log(categoria)
        const listaLivros = await buscarLivros(categoria);

        criarLivros(listaLivros, categoria);
    });
}

function criarLivros(listaLivros, categoria){
    const list_items = [];
        for(const livro of listaLivros){
            let urlFoto = livro.urlFoto
            let titulo =  livro.titulo
            let autor = livro.autor
            let idioma = livro.idioma
            let data = livro.data
            let editora = livro.editora
            let descricao = livro.descricao

            let livro_template = geraTemplate(urlFoto, categoria, titulo, autor, idioma, data ,editora);
            list_items.push(livro_template)
        }
    const list_element = document.getElementById('caixaDeLivros');
    const pagination_element = document.getElementById('pagination');
    
    MostrarLivrosPesquisados(list_items, list_element, 4, 1);
    SetupPagination(list_items, pagination_element, 4);
}



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close");
  
    // Adiciona um evento de clique ao botão "Saiba mais" em cada item da lista
    document.getElementById("caixaDeLivros").addEventListener("click", function (event) {
      if (event.target.classList.contains("botao-saiba-mais")) {
        const listItem = event.target.closest(".container-livro-item");
        const titulo = listItem.querySelector(".livro-titulo").textContent;
        const descricao = listaLivros.find(livro => livro.titulo === titulo).descricao;
  
        // Atualiza o conteúdo do modal
        modalTitle.textContent = titulo;
        modalDescription.textContent = descricao;
  
        // Exibe o modal
        modal.style.display = "block";
      }
    });
  
    // Adiciona um evento de clique ao botão de fechar o modal
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });