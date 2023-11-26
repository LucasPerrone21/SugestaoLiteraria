const list_element = document.getElementById('caixaDeLivros');

let pagina_atual = 1;
let livros = 4;

export function MostrarLivrosPesquisados(items, container, livros_por_pagina, pagina) {
	
	if(pagina_atual !== pagina) pagina_atual = pagina;
	
	container.innerHTML = "";
	pagina--;

	let inicio = livros_por_pagina * pagina;
	let fim = inicio + livros_por_pagina;
	let paginatedItems = items.slice(inicio, fim);
    //console.log(paginatedItems)

    container.innerHTML += paginatedItems.join('')

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

