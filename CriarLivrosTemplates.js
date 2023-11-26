import {geraTemplate} from './utils/template.js'

export function criarLivrosTemplates(listaLivros, categoria){

    const list_templates = [];

        for(const livro of listaLivros){
            const urlFoto = livro.urlFoto

            let titulo =  livro.titulo
            if (livro.titulo == undefined){
                titulo = 'Livro sem Titulo'
            }else{
                titulo = livro.titulo
            }
            
            let autor = livro.autor
            if (livro.autor == undefined){
                autor = 'Desconhecido'
            }else{
                autor = livro.autor
            }

            let idioma = livro.idioma
            let data = livro.data

            let editora = livro.editora
            if (livro.editora == undefined){
                editora = 'Desconhecido'
            }else{
                editora = livro.editora
            }
            
            let descricao;
            if (livro.descricao == undefined){
                descricao = 'Livro sem descrição!!!'
            }else{
                descricao = livro.descricao
            }


            const livro_template = geraTemplate(urlFoto, categoria, titulo, autor, idioma, data ,editora, descricao);

            list_templates.push(livro_template)

            

        }
    
    return list_templates
    
}