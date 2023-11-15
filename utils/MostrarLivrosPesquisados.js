const list_element = document.getElementById('caixaDeLivros');

let pagina_atual = 1;
let livros = 4;

export function MostrarLivrosPesquisados(items, container, livros_por_pagina, pagina) {
	container.innerHTML = "";
	pagina--;

	let inicio = livros_por_pagina * pagina;
	let fim = inicio + livros_por_pagina;
	let paginatedItems = items.slice(inicio, fim);
    console.log(paginatedItems)

    container.innerHTML += paginatedItems

	paginatedItems.forEach((item) => {
		let livroCard = document.createElement("div");
		livroCard.innerHTML = item;
  
		// Adiciona evento de clique ao botão "Saiba mais"
		let saibaMaisButton = livroCard.querySelector(".botao-saiba-mais");
		saibaMaisButton.addEventListener("click", () => {
		   abrirModal(item);
		});
  
		container.appendChild(livroCard);
	});

}

export function SetupPagination (items, container, livros_por_pagina) {
	container.innerHTML = "";

	let pagina_count = Math.ceil(items.length / livros_por_pagina);
	for (let i = 1; i < pagina_count + 1; i++) {
		let btn = PaginationButton(i, items);
		container.appendChild(btn);
	}
}

function PaginationButton (pagina, items) {
	let button = document.createElement('button');
	button.innerText = pagina;

	if (pagina_atual == pagina) button.classList.add('active');

	button.addEventListener('click', function () {
		pagina_atual = pagina;
		MostrarLivrosPesquisados(items, list_element, livros, pagina_atual);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}


// Função para abrir o modal com a descrição do livro
async function abrirModal(livroHtml) {
	// Cria um elemento temporário para extrair as informações do livro
	let tempElement = document.createElement("div");
	tempElement.innerHTML = livroHtml;
 
	// Extrai as informações do livro
	let titulo = tempElement.querySelector(".livro-titulo").textContent;
 
	// Obtem a descrição do livro diretamente da API
	let descricao = await obterDescricaoDoLivro(titulo);
 
	// Preenche o modal com as informações
	document.getElementById("modalTitle").innerText = titulo;
	document.getElementById("modalDescription").innerText = descricao;
 
	// Mostra o modal
	document.getElementById("myModal").style.display = "block";
 }
 
 // Função para obter a descrição do livro da API
 async function obterDescricaoDoLivro(titulo) {
	try {
	   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${titulo}`);
	   const data = await response.json();
	   const descricao = data.items[0]?.volumeInfo?.description || "Descrição não disponível";
	   return descricao;
	} catch (error) {
	   console.error("Erro ao obter a descrição do livro:", error);
	   return "Descrição não disponível";
	}
 }