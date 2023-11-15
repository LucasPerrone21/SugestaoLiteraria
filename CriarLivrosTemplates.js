import {geraTemplate} from './utils/template.js'

export function criarLivrosTemplates(listaLivros, categoria){

    const list_templates = [];

        for(const livro of listaLivros){
            const urlFoto = livro.urlFoto
            const titulo =  livro.titulo
            const autor = livro.autor
            const idioma = livro.idioma
            const data = livro.data
            const editora = livro.editora
            const descricao = livro.descricao

            const livro_template = geraTemplate(urlFoto, categoria, titulo, autor, idioma, data ,editora, descricao);

            list_templates.push(livro_template)

            

        }
    
    return list_templates
    
}