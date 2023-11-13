function geraTemplate(
    capaEndereco,
    categoria,
    tituloLivro,
    autorLivro,
    idiomaLivro,
    dataPublicacao,
    editoraLivro
) {
    let template = 
    `<li class="container-livro-item">
        <img class="imagem-livro" src="${capaEndereco}" alt="">

        <div class="livros-dados-externos">
            <div class="livros-dados">
                <p class="livro-categoria">Categoria: ${categoria}</p>
                <h3 class="livro-titulo">${tituloLivro}</h3>
                <p class="livro-autor">${autorLivro}</p>
                <p class="livro-texto"><span class="bold">Idioma: </span>${idiomaLivro}</p>
                <p class="livro-texto"><span class="bold">Publicado em: </span>${dataPublicacao}</p>
                <p class="livro-texto"><span class="bold">Editora: </span>${editoraLivro}</p>
            </div>
        <a href="#" class="botao-saiba-mais">Saiba mais </a>
        </div>
    </li>`;

    return template;
}

export { geraTemplate };
