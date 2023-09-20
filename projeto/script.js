function toggleMode() {
    const html = document.documentElement; //acessando o 'document' da pagina e o seu elemento
    //segunda forma de executar o mesmo código
    html.classList.toggle("light");

    //primeira forma de fazer
    // if(!html.classList.contains("light")){
    //     html.classList.add("light");
    // } else {
    //     html.classList.remove("light");
    // }

    //pegar a imagem
    const img = document.querySelector("#profile img");

    // substituir a imagem para cada funcao da classe
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png");
        img.setAttribute('alt', "Foto de Jefferson Moraes, sorrindo, com barba preta com e usando oculos transparente em fundo de jardim.");
    } else {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', "Foto de Jefferson Moraes, sorrindo, com barba preta com e usando oculos transparente");
    }

}