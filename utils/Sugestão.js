const generos = ['Tecnologia', 'Romance', 'Suspense', 'Bibligrafia', 'Educação', 'Fiction', 'Action ','Adventure','Classics','Mystery','Detective','Fantasy', 'Historical','Horror','Science Fiction','Suspense','Thrillers','Autobiographies','Poetry','Self-Help' ]


export function GeneroAleatorio(){
    const numeroAleatorio = inteiroAleatorio(20)
    return generos[numeroAleatorio]
}

export function inteiroAleatorio(num){
    const numeroAleatorio = Math.floor(Math.random() * num)
    return numeroAleatorio
}



