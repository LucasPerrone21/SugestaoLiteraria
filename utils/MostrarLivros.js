import {geraTemplate} from './template.js'



const list_element = document.getElementById('caixaDeLivros');
const pagination_element = document.getElementById('pagination');

let pagina_atual = 1;
let livros = 4;

export function MostrarLivros (items, container, livros_por_pagina, pagina) {
	container.innerHTML = "";
	pagina--;

	let inicio = livros_por_pagina * pagina;
	let fim = inicio + livros_por_pagina;
	let paginatedItems = items.slice(inicio, fim);
    console.log(paginatedItems)

    container.innerHTML += paginatedItems

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
		MostrarLivros(items, list_element, livros, pagina_atual);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

